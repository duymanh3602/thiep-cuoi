import React from 'react'

const DateStory: React.FC = () => {
  return (
    <section id='love-story' className='bg-white py-12 text-center px-4'>
      <h2 className='text-xl text-gray-800 font-semibold mb-4'>We are Getting Married</h2>
      <div className='flex justify-center items-center gap-6 flex-col md:flex-row'>
        <img src='https://placehold.co/300x400' alt='Groom' className='w-40 h-48 object-cover rounded-md shadow-lg' />
        <img src='https://placehold.co/300x400' alt='Bride' className='w-40 h-48 object-cover rounded-md shadow-lg' />
      </div>
      <p className='text-sm text-gray-500 mt-6 max-w-xl mx-auto'>
        Không quan trọng hãy nhớ điều gì, điều quan trọng là ai đã ở bên bạn mọi lúc, vào người thời điểm khó khăn nhất.
        Tin ai. Bắt đầu lại. Dự phần còn lại của đời mình.
      </p>
      <p className='mt-4 text-gray-600 italic'>— Thu Uyên & Hải Long</p>
    </section>
  )
}

export default DateStory
