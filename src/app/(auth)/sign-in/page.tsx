import leftSideImage from '@/Assets/free-doctor-character-illustration-c9fbh.jpg'
import SignInForm from '@/components/auth/SignInForm'
import Image from 'next/image'
export default function SignInPage() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 items-center'>
    
      <Image
        src={leftSideImage}
        alt='doctor image'
        className='hidden md:block w-3xl h-175'
      />
      <SignInForm />
    </div>
  )
}
