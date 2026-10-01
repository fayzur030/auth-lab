import leftSideImage from '@/Assets/free-doctor-character-illustration-c9fbh.jpg'
import VerifyAccountForm from '@/components/auth/VerifyAccountForm'

import Image from 'next/image'
import { Suspense } from 'react'
export default function VerifyAccount() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2  '>
      <Image
        src={leftSideImage}
        alt='doctor image'
        className='hidden md:block w-3xl h-175'
      />
      <Suspense fallback={<p>Loading</p>}>
        <VerifyAccountForm />
      </Suspense>
    </div>
  )
}
