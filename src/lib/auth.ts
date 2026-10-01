import { betterAuth } from 'better-auth'
import { MongoClient } from 'mongodb'
import { mongodbAdapter } from 'better-auth/adapters/mongodb'
import { Resend } from 'resend'
import { emailOTP } from 'better-auth/plugins'

const uri = process.env.BETTER_AUTH_DB_URL
const resend = new Resend(process.env.RESEND_API_KEY)
if (!uri) {
  throw new Error('BETTER_AUTH_DB_URL is not defined')
}

const client = new MongoClient(uri)
const db = client.db('auth-lab')

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
  },
  // emailVerification: {
  //   sendVerificationEmail: async ({ user, url }) => {
  //     void resend.emails.send({
  //       from: 'Acme <onboarding@example.com>',
  //       to: user.email,
  //       subject: 'Verify your email address',
  //       html: `
  //       <h1>Please Verify your email address</h1>
  //       Click <a href="${url}">here</a> to verify your email.`,
  //     })
  //   },
  //   sendOnSignUp: true,
  //   autoSignInAfterVerification: true,
  //   expiresIn: 3600, // 1 hour
  // },
  plugins: [
    emailOTP({
      async sendVerificationOTP({ email, otp, type }) {
        await resend.emails.send({
          from: 'CareSync <onboarding@resend.dev>',
          to: email,
          subject:
            type === 'sign-in' ? 'Your sign-in code' : 'Your verification code',
          html: `
          <h2>Verify your email</h2>
          <p>Your verification code is:</p>
          <h1>${otp}</h1>
          <p>This code will expire soon.</p>
        `,
        })
      },
    }),
  ],

  socialProviders: {
    google: {
      clientId: process.env.BETTER_AUTH_GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.BETTER_AUTH_GOOGLE_SECRET as string,
    },
  },
  database: mongodbAdapter(db, {
    client,
  }),
})
