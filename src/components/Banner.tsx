import React from 'react'

const Banner = () => {
  return (
    <div>
      <section className='min-h-[calc(100vh-80px)] flex items-center'>
        <div className='max-w-7xl mx-auto w-full px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            {/* Left Content */}
            <div className='max-w-xl'>
              <span className='inline-flex items-center rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600'>
                Your Health, Connected
              </span>

              <h1 className='mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight'>
                Better Care.
                <span className='block text-blue-600'>Better Connection.</span>
              </h1>

              <p className='mt-6 text-base sm:text-lg leading-8 text-gray-600'>
                CareSync makes it easier to manage your health, connect with
                healthcare professionals, and keep your important health
                information in one secure place.
              </p>

              <div className='mt-8 flex flex-col sm:flex-row gap-4'>
                <button className='rounded-lg bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white hover:bg-blue-700 transition'>
                  Get Started
                </button>

                <button className='rounded-lg border border-gray-300 px-6 py-3.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition'>
                  Learn More
                </button>
              </div>

              <div className='mt-8 flex items-center gap-8 text-sm text-gray-500'>
                <div>
                  <p className='font-semibold text-gray-900'>Secure</p>
                  <p>Your data protected</p>
                </div>

                <div className='h-10 w-px bg-gray-200' />

                <div>
                  <p className='font-semibold text-gray-900'>Simple</p>
                  <p>Easy to manage</p>
                </div>

                <div className='h-10 w-px bg-gray-200' />

                <div>
                  <p className='font-semibold text-gray-900'>Connected</p>
                  <p>Care in one place</p>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className='relative'>
              <div className='absolute -top-10 -right-10 h-72 w-72 rounded-full bg-blue-100 blur-3xl opacity-60' />
              <div className='absolute -bottom-10 -left-10 h-64 w-64 rounded-full bg-teal-100 blur-3xl opacity-60' />

              <div className='relative rounded-3xl bg-gradient-to-br from-blue-50 to-teal-50 p-8 lg:p-12'>
                <div className='rounded-2xl bg-white p-6 shadow-xl'>
                  <div className='flex items-center justify-between'>
                    <div>
                      <p className='text-sm text-gray-500'>Health Overview</p>
                      <h3 className='mt-1 text-xl font-semibold text-gray-900'>
                        Welcome back!
                      </h3>
                    </div>

                    <div className='flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600'>
                      +
                    </div>
                  </div>

                  <div className='mt-6 grid grid-cols-2 gap-4'>
                    <div className='rounded-xl bg-blue-50 p-4'>
                      <p className='text-sm text-gray-500'>Appointments</p>
                      <p className='mt-2 text-2xl font-bold text-gray-900'>
                        04
                      </p>
                    </div>

                    <div className='rounded-xl bg-teal-50 p-4'>
                      <p className='text-sm text-gray-500'>Health Records</p>
                      <p className='mt-2 text-2xl font-bold text-gray-900'>
                        12
                      </p>
                    </div>
                  </div>

                  <div className='mt-4 rounded-xl border border-gray-100 p-4'>
                    <div className='flex items-center justify-between'>
                      <div>
                        <p className='text-sm font-medium text-gray-900'>
                          Next Appointment
                        </p>
                        <p className='mt-1 text-xs text-gray-500'>
                          General Consultation
                        </p>
                      </div>

                      <span className='rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-600'>
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
    </div>
  )
}

export default Banner
