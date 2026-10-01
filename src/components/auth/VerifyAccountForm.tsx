'use client'
import logo from '@/Assets/CareSync.png'
import { Button, InputOTP, Label, Link, Surface } from '@heroui/react'
import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'
import { toastQueue } from '../ui/ToastProvider'
import { emailOtp } from '@/lib/auth-client'

export default function VerifyAccountForm() {
  const searchParams = useSearchParams()
  const email = searchParams.get('email')
  const [otp, setOtp] = useState('')
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  if (!email) {
    return
  }
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (otp.length !== 6) {
      toastQueue.add({
        description: 'Please enter the 6-digit verification code.',
        variant: 'danger',
      })
      return
    }
    setLoading(true)

    const { error } = await emailOtp.verifyEmail({
      email,
      otp,
    })
    setLoading(false)
    if (error) {
      toastQueue.add({
        description: error.message,
        variant: 'danger',
      })
      return
    }
    toastQueue.add({
      description: 'Email verified successfully!',
      variant: 'success',
    })
    router.push('/dashboard')
  }

  return (
    <div className='flex h-screen flex-col items-center justify-center'>
      <Link href='/'>
        <Image
          src={logo}
          alt='logo'
          width={160}
          height={100}
          className='h-auto w-40'
        />
      </Link>

      <Surface className='flex w-full max-w-md flex-col gap-2 rounded-3xl p-6'>
        <form onSubmit={onSubmit} className='flex flex-col gap-4'>
          <div className='flex flex-col gap-1'>
            <Label>Verify account</Label>

            <p className='text-sm text-muted'>
              We&apos;ve sent a code to{' '}
              <span className='text-foreground'>{email}</span>
            </p>
          </div>

          <InputOTP
            maxLength={6}
            variant='secondary'
            value={otp}
            onChange={setOtp}
          >
            <InputOTP.Group>
              <InputOTP.Slot index={0} />
              <InputOTP.Slot index={1} />
              <InputOTP.Slot index={2} />
            </InputOTP.Group>

            <InputOTP.Separator />

            <InputOTP.Group>
              <InputOTP.Slot index={3} />
              <InputOTP.Slot index={4} />
              <InputOTP.Slot index={5} />
            </InputOTP.Group>
          </InputOTP>

          <Button
            type='submit'
            isDisabled={otp.length !== 6 || loading}
            className='w-full'
          >
            {loading ? 'Verifying...' : 'Verify Account'}
          </Button>

          <div className='flex items-center gap-1.25 px-1 pt-1'>
            <p className='text-sm text-muted'>Didn&apos;t receive a code?</p>

            <Link className='text-foreground underline' href='#'>
              Resend
            </Link>
          </div>
        </form>
      </Surface>
    </div>
  )
}
