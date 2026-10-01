import Link from 'next/link'
import logo from '@/Assets/CareSync.png'
import Image from 'next/image'

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'Services', href: '#services' },
  { name: 'About Us', href: '#about' },
]

const supportLinks = [
  { name: 'Help Center', href: '#' },
  { name: 'Privacy Policy', href: '#' },
  { name: 'Terms & Conditions', href: '#' },
  { name: 'Contact Us', href: '#' },
]

const socialLinks = [
  { name: 'Facebook', label: 'f', href: '#' },
  { name: 'LinkedIn', label: 'in', href: '#' },
  { name: 'X', label: 'X', href: '#' },
]

const Footer = () => {
  return (
    <footer className='bg-slate-900 text-slate-300'>
      <div className='mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8'>
        <div className='grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12'>
          {/* Brand */}
          <div className='sm:col-span-2 lg:col-span-2'>
            <Link href='/' className='inline-flex items-center gap-2'>
              <Image
                src={logo}
                alt='CareSync logo'
                width={160}
                height={100}
                className='h-auto w-32 sm:w-36'
              />
            </Link>

            <p className='mt-5 max-w-md text-sm leading-7 text-gray-400'>
              CareSync makes healthcare simple by helping you manage
              appointments, health information, and care from one convenient
              platform.
            </p>

            {/* Social Links */}
            <div className='mt-6 flex gap-3'>
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className='flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 text-sm transition hover:bg-blue-600 hover:text-white'
                >
                  {social.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='font-semibold text-white'>Quick Links</h3>

            <ul className='mt-5 space-y-3 text-sm'>
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className='transition hover:text-blue-400'
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className='font-semibold text-white'>Support</h3>

            <ul className='mt-5 space-y-3 text-sm'>
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className='transition hover:text-blue-400'
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className='mt-10 flex flex-col gap-3 border-t border-gray-800 pt-6 text-center sm:mt-12 sm:flex-row sm:items-center sm:justify-between sm:text-left'>
          <p className='text-xs text-gray-500 sm:text-sm'>
            © {new Date().getFullYear()} CareSync. All rights reserved.
          </p>

          <p className='text-xs text-gray-500 sm:text-sm'>
            Made with care for better healthcare.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
