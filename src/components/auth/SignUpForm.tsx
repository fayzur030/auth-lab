'use client'
import logo from '@/Assets/CareSync.png'
import { toastQueue } from '@/components/ui/ToastProvider'
import { signUp } from '@/lib/auth-client'
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from '@heroui/react'

import Image from 'next/image'
import Link from 'next/link'

type FormDataType = {
  name: string
  email: string
  password: string
}

export default function SignUpForm() {
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries()) as FormDataType

    const { error } = await signUp.email({
      name: data.name,
      email: data.email,
      password: data.password,
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
      // title: '',
      description: 'Account create successfully',
      variant: 'success',
    })
  }

  return (
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
        <h2 className='font-semibold text-xl text-gray-700'>Create Account</h2>
        <TextField
          isRequired
          name='name'
          validate={(value) => {
            if (value.length < 3) {
              return 'Name must be at least 3 characters'
            }
            return null
          }}
        >
          <Label>Name</Label>
          <Input placeholder='Your name' />
          <FieldError />
        </TextField>
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
          <Input placeholder='john@example.com' />
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
        </TextField>

        <div className='flex gap-2 w-full'>
          <Button
            type='submit'
            className='h-10 w-full rounded-lg bg-blue-500 font-medium text-white hover:bg-blue-800'
          >
            Create Account
          </Button>
        </div>
        <div className='flex items-center gap-3'>
          <div className='h-px flex-1 bg-gray-200' />
          <span className='text-xs font-medium text-gray-400'>OR</span>
          <div className='h-px flex-1 bg-gray-200' />
        </div>

        {/* Google */}
        <Button
          //   onClick={handleGoogleSignIn}
          type='button'
          variant='secondary'
          className='flex h-10 w-full items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white font-medium text-gray-700 hover:bg-gray-50'
        >
          <svg
            width='19'
            height='19'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fill='#4285F4'
              d='M21.35 12.27c0-.78-.07-1.53-.2-2.25H12v4.26h5.24a4.48 4.48 0 0 1-1.94 2.94v2.45h3.14c1.84-1.7 2.91-4.2 2.91-7.4z'
            />
            <path
              fill='#34A853'
              d='M12 21.9c2.63 0 4.84-.87 6.45-2.36l-3.14-2.45c-.87.58-1.98.92-3.31.92-2.54 0-4.7-1.72-5.47-4.04H3.28v2.53A9.75 9.75 0 0 0 12 21.9z'
            />
            <path
              fill='#FBBC05'
              d='M6.53 13.97a5.86 5.86 0 0 1 0-3.74V7.7H3.28a9.74 9.74 0 0 0 0 8.8l3.25-2.53z'
            />
            <path
              fill='#EA4335'
              d='M12 6.19c1.43 0 2.71.49 3.72 1.46l2.79-2.79C16.83 3.28 14.62 2.4 12 2.4a9.75 9.75 0 0 0-8.72 5.3l3.25 2.53C7.3 7.91 9.46 6.19 12 6.19z'
            />
          </svg>
          Continue with Google
        </Button>

        <Button
          type='reset'
          variant='secondary'
          className='h-10 w-full rounded-lg border border-gray-200 bg-gray-50 text-gray-600 hover:bg-gray-100'
        >
          Reset
        </Button>
      </Form>
    </div>
  )
}
