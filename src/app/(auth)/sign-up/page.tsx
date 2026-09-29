'use client'

import { toastQueue } from '@/components/ui/ToastProvider'
import { signUp } from '@/lib/auth-client'
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
import Link from 'next/link'

type FormDataType = {
  name: string
  email: string
  password: string
}

export default function SignUpPage() {
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
    <div className='flex items-center justify-center h-screen '>
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

          <FieldError />
          <Description>
            I have already account? <Link href='/'>Sign in</Link>
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
  )
}
