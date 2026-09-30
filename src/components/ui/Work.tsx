import React from 'react'

const Work = () => {
  return (
    <div>
      <section className='py-20 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-6 lg:px-8'>
          {/* Section Header */}
          <div className='text-center max-w-2xl mx-auto'>
            <span className='text-sm font-semibold text-blue-600 uppercase tracking-wider'>
              How It Works
            </span>

            <h2 className='mt-3 text-3xl sm:text-4xl font-bold text-gray-900'>
              Healthcare made simple
            </h2>

            <p className='mt-4 text-gray-600 leading-7'>
              CareSync connects you with the tools and care you need, all in
              just a few simple steps.
            </p>
          </div>

          {/* Steps */}
          <div className='mt-14 grid grid-cols-1 md:grid-cols-3 gap-8'>
            {/* Step 1 */}
            <div className='relative text-center'>
              <div className='mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600'>
                <span className='text-xl font-bold'>01</span>
              </div>

              <h3 className='mt-6 text-xl font-semibold text-gray-900'>
                Create Your Account
              </h3>

              <p className='mt-3 text-sm leading-6 text-gray-600'>
                Sign up securely and create your personal CareSync profile in
                just a few moments.
              </p>
            </div>

            {/* Step 2 */}
            <div className='relative text-center'>
              <div className='mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-100 text-teal-600'>
                <span className='text-xl font-bold'>02</span>
              </div>

              <h3 className='mt-6 text-xl font-semibold text-gray-900'>
                Connect With Care
              </h3>

              <p className='mt-3 text-sm leading-6 text-gray-600'>
                Find healthcare professionals, manage appointments, and stay
                connected with your care team.
              </p>
            </div>

            {/* Step 3 */}
            <div className='relative text-center'>
              <div className='mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600'>
                <span className='text-xl font-bold'>03</span>
              </div>

              <h3 className='mt-6 text-xl font-semibold text-gray-900'>
                Manage Your Health
              </h3>

              <p className='mt-3 text-sm leading-6 text-gray-600'>
                Keep your health records organized and access everything you
                need from one simple place.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Work
