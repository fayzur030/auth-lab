import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className='bg-gray-950 text-gray-300'>
        <div className='max-w-7xl mx-auto px-6 lg:px-8 py-14'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10'>
            {/* Brand */}
            <div className='lg:col-span-2'>
              <div className='flex items-center gap-2'>
                <div className='flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white font-bold'>
                  C
                </div>

                <span className='text-xl font-bold text-white'>
                  Care<span className='text-blue-500'>Sync</span>
                </span>
              </div>

              <p className='mt-5 max-w-md text-sm leading-7 text-gray-400'>
                CareSync makes healthcare simple by helping you manage
                appointments, health information, and care from one convenient
                platform.
              </p>

              <div className='mt-6 flex gap-3'>
                <Link
                  href='#'
                  className='flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 text-sm hover:bg-blue-600 hover:text-white transition'
                >
                  f
                </Link>

                <Link
                  href='#'
                  className='flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 text-sm hover:bg-blue-600 hover:text-white transition'
                >
                  in
                </Link>

                <Link
                  href='#'
                  className='flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 text-sm hover:bg-blue-600 hover:text-white transition'
                >
                  X
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className='font-semibold text-white'>Quick Links</h3>

              <ul className='mt-5 space-y-3 text-sm'>
                <li>
                  <Link href='/' className='hover:text-blue-400 transition'>
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    href='#how-it-works'
                    className='hover:text-blue-400 transition'
                  >
                    How It Works
                  </Link>
                </li>

                <li>
                  <Link
                    href='#services'
                    className='hover:text-blue-400 transition'
                  >
                    Services
                  </Link>
                </li>

                <li>
                  <Link
                    href='#about'
                    className='hover:text-blue-400 transition'
                  >
                    About Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className='font-semibold text-white'>Support</h3>

              <ul className='mt-5 space-y-3 text-sm'>
                <li>
                  <a href='#' className='hover:text-blue-400 transition'>
                    Help Center
                  </a>
                </li>

                <li>
                  <a href='#' className='hover:text-blue-400 transition'>
                    Privacy Policy
                  </a>
                </li>

                <li>
                  <a href='#' className='hover:text-blue-400 transition'>
                    Terms & Conditions
                  </a>
                </li>

                <li>
                  <a href='#' className='hover:text-blue-400 transition'>
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className='mt-12 border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4'>
            <p className='text-sm text-gray-500'>
              © {new Date().getFullYear()} CareSync. All rights reserved.
            </p>

            <p className='text-sm text-gray-500'>
              Made with care for better healthcare.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
