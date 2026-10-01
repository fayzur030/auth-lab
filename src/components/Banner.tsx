import React from 'react'

const Banner = () => {
  return (
    <section className='flex min-h-[calc(100vh-72px)] items-center overflow-hidden py-12 sm:py-16 lg:py-20'>
      <div className='mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16'>
          {/* Left Content */}
          <div className='mx-auto w-full max-w-xl text-center lg:mx-0 lg:text-left'>
            <span className='inline-flex items-center rounded-full bg-blue-50 px-4 py-2 text-xs font-medium text-blue-600 sm:text-sm'>
              Your Health, Connected
            </span>

            <h1 className='mt-5 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:mt-6 sm:text-5xl lg:text-6xl'>
              Better Care.
              <span className='block text-blue-600'>Better Connection.</span>
            </h1>

            <p className='mx-auto mt-5 max-w-lg text-sm leading-7 text-gray-600 sm:mt-6 sm:text-base sm:leading-8 lg:mx-0 lg:text-lg'>
              CareSync makes it easier to manage your health, connect with
              healthcare professionals, and keep your important health
              information in one secure place.
            </p>

            {/* Buttons */}
            <div className='mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:justify-center lg:justify-start'>
              <button
                type='button'
                className='w-full rounded-lg bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700 sm:w-auto'
              >
                Get Started
              </button>

              <button
                type='button'
                className='w-full rounded-lg border border-gray-300 px-6 py-3.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 sm:w-auto'
              >
                Learn More
              </button>
            </div>

            {/* Features */}
            <div className='mx-auto mt-8 grid max-w-md grid-cols-3 divide-x divide-gray-200 text-center sm:mt-10 lg:mx-0 lg:max-w-none lg:text-left'>
              <div className='px-2 sm:px-4'>
                <p className='text-sm font-semibold text-gray-900 sm:text-base'>
                  Secure
                </p>
                <p className='mt-1 text-[10px] leading-4 text-gray-500 sm:text-xs'>
                  Your data protected
                </p>
              </div>

              <div className='px-2 sm:px-4'>
                <p className='text-sm font-semibold text-gray-900 sm:text-base'>
                  Simple
                </p>
                <p className='mt-1 text-[10px] leading-4 text-gray-500 sm:text-xs'>
                  Easy to manage
                </p>
              </div>

              <div className='px-2 sm:px-4'>
                <p className='text-sm font-semibold text-gray-900 sm:text-base'>
                  Connected
                </p>
                <p className='mt-1 text-[10px] leading-4 text-gray-500 sm:text-xs'>
                  Care in one place
                </p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className='relative mx-auto w-full max-w-xl lg:max-w-none'>
            {/* Background Decorations */}
            <div className='absolute -right-16 -top-16 h-48 w-48 rounded-full bg-blue-100 blur-3xl sm:h-64 sm:w-64 lg:h-72 lg:w-72' />

            <div className='absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-teal-100 blur-3xl sm:h-56 sm:w-56 lg:h-64 lg:w-64' />

            {/* Dashboard Container */}
            <div className='relative rounded-2xl bg-gradient-to-br from-blue-50 to-teal-50 p-4 sm:rounded-3xl sm:p-6 lg:p-10'>
              <div className='rounded-xl bg-white p-4 shadow-xl sm:rounded-2xl sm:p-6'>
                {/* Header */}
                <div className='flex items-center justify-between gap-4'>
                  <div className='min-w-0'>
                    <p className='text-xs text-gray-500 sm:text-sm'>
                      Health Overview
                    </p>

                    <h3 className='mt-1 text-base font-semibold text-gray-900 sm:text-xl'>
                      Welcome back!
                    </h3>
                  </div>

                  <div className='flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-100 text-lg font-medium text-blue-600 sm:h-12 sm:w-12 sm:text-xl'>
                    +
                  </div>
                </div>

                {/* Stats */}
                <div className='mt-5 grid grid-cols-2 gap-3 sm:mt-6 sm:gap-4'>
                  <div className='rounded-lg bg-blue-50 p-3 sm:rounded-xl sm:p-4'>
                    <p className='text-xs text-gray-500 sm:text-sm'>
                      Appointments
                    </p>

                    <p className='mt-1 text-xl font-bold text-gray-900 sm:mt-2 sm:text-2xl'>
                      04
                    </p>
                  </div>

                  <div className='rounded-lg bg-teal-50 p-3 sm:rounded-xl sm:p-4'>
                    <p className='text-xs text-gray-500 sm:text-sm'>
                      Health Records
                    </p>

                    <p className='mt-1 text-xl font-bold text-gray-900 sm:mt-2 sm:text-2xl'>
                      12
                    </p>
                  </div>
                </div>

                {/* Next Appointment */}
                <div className='mt-3 rounded-lg border border-gray-100 p-3 sm:mt-4 sm:rounded-xl sm:p-4'>
                  <div className='flex items-center justify-between gap-3'>
                    <div className='min-w-0'>
                      <p className='text-xs font-medium text-gray-900 sm:text-sm'>
                        Next Appointment
                      </p>

                      <p className='mt-1 truncate text-[10px] text-gray-500 sm:text-xs'>
                        General Consultation
                      </p>
                    </div>

                    <span className='shrink-0 rounded-full bg-green-50 px-2 py-1 text-[9px] font-medium text-green-600 sm:px-3 sm:text-xs'>
                      Confirmed
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
