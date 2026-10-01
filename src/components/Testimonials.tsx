import React from 'react'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Patient',
    text: 'CareSync makes managing my appointments and health information much easier.',
  },
  {
    name: 'David Miller',
    role: 'Patient',
    text: 'The simple interface makes it easy to find everything I need in one place.',
  },
  {
    name: 'Emily Wilson',
    role: 'Patient',
    text: 'I love how organized and convenient the whole healthcare experience feels.',
  },
]

const Testimonials = () => {
  return (
    <section className='py-14 sm:py-16 lg:py-20'>
      <div className='mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Section Heading */}
        <div className='text-center'>
          <span className='text-xs font-semibold uppercase tracking-wider text-blue-600 sm:text-sm'>
            Testimonials
          </span>

          <h2 className='mt-2 text-2xl font-bold leading-tight text-gray-900 sm:mt-3 sm:text-3xl lg:text-4xl'>
            What our users say
          </h2>
        </div>

        {/* Testimonials */}
        <div className='mt-8 grid grid-cols-1 gap-5 sm:mt-10 sm:gap-6 md:grid-cols-2 lg:mt-12 lg:grid-cols-3'>
          {testimonials.map((item) => (
            <div
              key={item.name}
              className='flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md sm:p-6'
            >
              {/* Rating */}
              <div
                className='flex gap-1 text-sm text-yellow-400'
                aria-label='5 out of 5 stars'
              >
                ★ ★ ★ ★ ★
              </div>

              {/* Review */}
              <p className='mt-4 text-sm leading-7 text-gray-600 sm:mt-5'>
                “{item.text}”
              </p>

              {/* User */}
              <div className='mt-auto pt-5 sm:pt-6'>
                <p className='text-sm font-semibold text-gray-900 sm:text-base'>
                  {item.name}
                </p>

                <p className='mt-0.5 text-xs text-gray-500 sm:text-sm'>
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
