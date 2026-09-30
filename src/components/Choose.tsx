import React from 'react'

const Choose = () => {
  return (
    <div>
      <section className='py-20 bg-gray-50'>
  <div className='max-w-7xl mx-auto px-6 lg:px-8'>

    <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>

      <div>
        <span className='text-sm font-semibold uppercase tracking-wider text-blue-600'>
          Why CareSync
        </span>

        <h2 className='mt-3 text-3xl sm:text-4xl font-bold text-gray-900'>
          Healthcare that works around you
        </h2>

        <p className='mt-5 text-gray-600 leading-7'>
          We make managing your healthcare easier by bringing your
          essential information and services together.
        </p>

        <div className='mt-8 space-y-5'>

          <div className='flex gap-4'>
            <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600'>
              ✓
            </div>

            <div>
              <h3 className='font-semibold text-gray-900'>
                Simple and Convenient
              </h3>

              <p className='mt-1 text-sm text-gray-600'>
                Manage your healthcare without unnecessary complexity.
              </p>
            </div>
          </div>

          <div className='flex gap-4'>
            <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-100 text-teal-600'>
              ✓
            </div>

            <div>
              <h3 className='font-semibold text-gray-900'>
                Secure Information
              </h3>

              <p className='mt-1 text-sm text-gray-600'>
                Keep your personal health information protected and organized.
              </p>
            </div>
          </div>

          <div className='flex gap-4'>
            <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-600'>
              ✓
            </div>

            <div>
              <h3 className='font-semibold text-gray-900'>
                Connected Care
              </h3>

              <p className='mt-1 text-sm text-gray-600'>
                Stay connected with the people and information involved in
                your care.
              </p>
            </div>
          </div>

        </div>
      </div>

      <div className='rounded-3xl bg-gradient-to-br from-blue-600 to-teal-500 p-8 sm:p-12 text-white'>
        <p className='text-sm font-medium text-blue-100'>
          CARESYNC
        </p>

        <h3 className='mt-4 text-3xl font-bold'>
          Your health journey,
          <span className='block'>all in one place.</span>
        </h3>

        <p className='mt-5 text-sm leading-7 text-blue-50'>
          Stay organized, stay connected, and take control of your
          healthcare experience.
        </p>

        <button className='mt-8 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-blue-600 hover:bg-gray-100 transition'>
          Get Started
        </button>
      </div>

    </div>
  </div>
</section>
    </div>
  )
}

export default Choose
