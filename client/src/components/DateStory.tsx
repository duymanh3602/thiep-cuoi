import React from 'react'

const DateStory: React.FC = () => {
  return (
    <section id='love-story' className='bg-white py-12 text-center px-4'>
      <h2 className='text-4xl lg:text-6xl font-peristiwa text-gray-800 mb-4'>We are Getting Married</h2>
      <div className='flex justify-center items-center gap-6 flex-col md:flex-row'>
        <img src='https://placehold.co/300x400' alt='Groom' className='w-80 h-100 object-cover rounded-md shadow-lg' />
        <img src='https://placehold.co/300x400' alt='Bride' className='w-80 h-100 object-cover rounded-md shadow-lg' />
      </div>
      <p className='text-sm text-gray-500 mt-6 max-w-xl mx-auto'>
        Trong hàng triệu nhịp đập của thế giới này, có hai trái tim đã tìm thấy nhau không phải chỉ vì định mệnh, mà bởi
        mỗi ngày, dù bão giông hay bình yên, họ vẫn chọn nắm tay nhau, cùng bước qua tất cả, cùng yêu – bằng tất cả
        những gì chân thành nhất.
      </p>
      <p className='mt-4 text-gray-600 italic'>— Thu Uyên & Hải Long</p>
    </section>
  )
}

export default DateStory
