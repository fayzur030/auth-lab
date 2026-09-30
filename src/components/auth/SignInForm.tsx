'use client'
import logo from '@/Assets/CareSync.png'
import { toastQueue } from '@/components/ui/ToastProvider'
import { signIn } from '@/lib/auth-client'
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from '@heroui/react'
import { Check } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

type SignInType = {
  email: string
  password: string
  callbackURL: string
}

export default function SignInForm() {
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries()) as SignInType

    const { error } = await signIn.email({
      email: data.email,
      password: data.password,
      callbackURL: '/dashboard',
    })
    if (error) {
      toastQueue.add({
        // title: 'Sign in failed',
        description: error.message,
        variant: 'danger',
      })
      return
    }
    toastQueue.add({
      title: 'Signed in successfully',
      description: 'You have signed in successfully.',
      variant: 'success',
    })
  }

  return (
    <div>
      <div className='flex flex-col items-center justify-center h-screen '>
        <Link href={'/'}>
          <Image
            src={logo}
            alt='logo'
            width={160}
            height={100}
            className=' h-auto w-40 '
          />
        </Link>
        <Form
          className='flex w-96 flex-col gap-4 border p-6 rounded-2xl shadow-2xl'
          onSubmit={onSubmit}
        >
          <h2 className='font-semibold text-xl text-gray-700'>
            Please Sign in
          </h2>
          <TextField
            isRequired
            name='email'
            type='email'
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return 'Please enter a valid email address'
              }

              return null
            }}
          >
            <Label>Email</Label>
            <Input placeholder='Enter your email' />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            minLength={8}
            name='password'
            type='password'
            validate={(value) => {
              if (value.length < 8) {
                return 'Password must be at least 8 characters'
              }
              if (!/[A-Z]/.test(value)) {
                return 'Password must contain at least one uppercase letter'
              }
              if (!/[0-9]/.test(value)) {
                return 'Password must contain at least one number'
              }

              return null
            }}
          >
            <Label>Password</Label>
            <Input placeholder='Enter your password' />

            <FieldError />
            <Description className='flex items-center justify-between mt-1.5 px-1'>
              <p>
                {' '}
                Don&apos;t have an account?{' '}
                <Link href='sign-up' className='text-blue-500 hover:underline'>
                  Sign up
                </Link>
              </p>
              <Link
                href={'forgot-password'}
                className='text-xs text-blue-500 hover:underline'
              >
                Forgot password
              </Link>
            </Description>
            <FieldError />
          </TextField>

          <div className='flex gap-2'>
            <Button type='submit'>
              <Check />
              Submit
            </Button>
            <Button type='reset' variant='secondary'>
              Reset
            </Button>
          </div>
        </Form>
      </div>
    </div>
  )
}
