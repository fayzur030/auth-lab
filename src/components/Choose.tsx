import React from 'react'

const Choose = () => {
  return (
    <section className='bg-gray-50 py-14 sm:py-16 lg:py-20'>
      <div className='mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16'>
          {/* Left Content */}
          <div className='w-full'>
            <span className='text-xs font-semibold uppercase tracking-wider text-blue-600 sm:text-sm'>
              Why CareSync
            </span>

            <h2 className='mt-3 text-2xl font-bold leading-tight text-gray-900 sm:text-3xl lg:text-4xl'>
              Healthcare that works around you
            </h2>

            <p className='mt-4 max-w-xl text-sm leading-7 text-gray-600 sm:mt-5 sm:text-base'>
              We make managing your healthcare easier by bringing your essential
              information and services together.
            </p>

            {/* Features */}
            <div className='mt-7 space-y-5 sm:mt-8 sm:space-y-6'>
              {/* Feature 1 */}
              <div className='flex gap-3 sm:gap-4'>
                <div className='flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-600 sm:h-10 sm:w-10'>
                  ✓
                </div>

                <div>
                  <h3 className='text-sm font-semibold text-gray-900 sm:text-base'>
                    Simple and Convenient
                  </h3>

                  <p className='mt-1 text-xs leading-6 text-gray-600 sm:text-sm'>
                    Manage your healthcare without unnecessary complexity.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className='flex gap-3 sm:gap-4'>
                <div className='flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-teal-100 text-sm font-bold text-teal-600 sm:h-10 sm:w-10'>
                  ✓
                </div>

                <div>
                  <h3 className='text-sm font-semibold text-gray-900 sm:text-base'>
                    Secure Information
                  </h3>

                  <p className='mt-1 text-xs leading-6 text-gray-600 sm:text-sm'>
                    Keep your personal health information protected and
                    organized.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className='flex gap-3 sm:gap-4'>
                <div className='flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-sm font-bold text-indigo-600 sm:h-10 sm:w-10'>
                  ✓
                </div>

                <div>
                  <h3 className='text-sm font-semibold text-gray-900 sm:text-base'>
                    Connected Care
                  </h3>

                  <p className='mt-1 text-xs leading-6 text-gray-600 sm:text-sm'>
                    Stay connected with the people and information involved in
                    your care.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right CTA */}
          <div className='rounded-2xl bg-gradient-to-br from-blue-600 to-teal-500 p-6 text-white sm:rounded-3xl sm:p-8 lg:p-12'>
            <p className='text-xs font-medium text-blue-100 sm:text-sm'>
              CARESYNC
            </p>

            <h3 className='mt-3 text-2xl font-bold leading-tight sm:mt-4 sm:text-3xl'>
              Your health journey,
              <span className='block'>all in one place.</span>
            </h3>

            <p className='mt-4 text-sm leading-6 text-blue-50 sm:mt-5 sm:leading-7'>
              Stay organized, stay connected, and take control of your
              healthcare experience.
            </p>

            <button
              type='button'
              className='mt-6 w-full rounded-lg bg-white px-6 py-3 text-sm font-semibold text-blue-600 transition hover:bg-gray-100 sm:mt-8 sm:w-auto'
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Choose
