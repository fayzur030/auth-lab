'use client'

import logo from '@/Assets/CareSync.png'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Features', href: '/features' },
  { name: 'Contact', href: '/contact' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <header className='sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur'>
      <nav className='mx-auto flex h-18 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8'>
        {/* Logo */}
        <Link href='/' onClick={closeMenu} className='shrink-0'>
          <Image
            src={logo}
            alt='CareSync logo'
            width={160}
            height={100}
            className='h-auto w-32 sm:w-36'
          />
        </Link>

        {/* Desktop Navigation */}
        <div className='hidden items-center gap-6 md:flex lg:gap-8'>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className='text-sm font-medium text-gray-600 transition-colors hover:text-blue-600'
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Auth Buttons */}
        <div className='hidden items-center gap-3 md:flex'>
          <Link
            href='/sign-in'
            className='rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100'
          >
            Sign In
          </Link>

          <Link
            href='/sign-up'
            className='rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700'
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type='button'
          onClick={() => setIsOpen((prev) => !prev)}
          className='rounded-lg p-2 text-gray-700 transition hover:bg-gray-100 md:hidden'
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='border-t border-gray-200 bg-white md:hidden'>
          <div className='mx-auto max-w-7xl px-4 py-4 sm:px-6'>
            {/* Mobile Navigation */}
            <div className='flex flex-col'>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  className='rounded-lg px-3 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100 hover:text-blue-600'
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile Auth */}
            <div className='mt-3 flex flex-col gap-2 border-t border-gray-200 pt-4 sm:flex-row'>
              <Link
                href='/sign-in'
                onClick={closeMenu}
                className='flex-1 rounded-lg border border-gray-300 px-4 py-2.5 text-center text-sm font-medium text-gray-700 transition hover:bg-gray-100'
              >
                Sign In
              </Link>

              <Link
                href='/sign-up'
                onClick={closeMenu}
                className='flex-1 rounded-lg bg-blue-600 px-4 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-blue-700'
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
