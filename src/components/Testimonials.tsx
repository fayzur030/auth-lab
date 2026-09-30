import React from 'react'

const Testimonials = () => {
  return (
    <div>
      <section className='py-20'>
  <div className='max-w-7xl mx-auto px-6 lg:px-8'>

    <div className='text-center'>
      <span className='text-sm font-semibold uppercase tracking-wider text-blue-600'>
        Testimonials
      </span>

      <h2 className='mt-3 text-3xl sm:text-4xl font-bold text-gray-900'>
        What our users say
      </h2>
    </div>

    <div className='mt-12 grid grid-cols-1 md:grid-cols-3 gap-6'>

      {[
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
      ].map((item) => (
        <div
          key={item.name}
          className='rounded-2xl border border-gray-100 bg-white p-6 shadow-sm'
        >
          <div className='flex gap-1 text-yellow-400'>
            ★ ★ ★ ★ ★
          </div>

          <p className='mt-5 text-sm leading-7 text-gray-600'>
            “{item.text}”
          </p>

          <div className='mt-6'>
            <p className='font-semibold text-gray-900'>
              {item.name}
            </p>

            <p className='text-sm text-gray-500'>
              {item.role}
            </p>
          </div>
        </div>
      ))}

    </div>
  </div>
</section>
    </div>
  )
}

export default Testimonials
