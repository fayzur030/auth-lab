import React from 'react'

const CTA = () => {
  return (
    <section className='px-4 py-12 sm:px-6 sm:py-16 lg:py-20'>
      <div className='mx-auto w-full max-w-7xl rounded-2xl bg-blue-600 px-5 py-12 text-center sm:rounded-3xl sm:px-12 sm:py-16 lg:px-16'>
        <h2 className='text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl'>
          Take control of your healthcare today
        </h2>

        <p className='mx-auto mt-4 max-w-2xl text-sm leading-6 text-blue-100 sm:text-base sm:leading-7'>
          Create your CareSync account and start managing your healthcare
          experience from one simple platform.
        </p>

        <button
          type='button'
          className='mt-6 w-full rounded-lg bg-white px-7 py-3.5 text-sm font-semibold text-blue-600 transition hover:bg-gray-100 sm:mt-8 sm:w-auto'
        >
          Get Started
        </button>
      </div>
    </section>
  )
}

export default CTA
