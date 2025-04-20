import React, { useEffect, useState } from 'react'

const weddingDate = new Date('2025-05-19T09:00:00')

const SaveTheDatePage: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft())

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  function getTimeLeft() {
    const now = new Date().getTime()
    const distance = weddingDate.getTime() - now

    const days = Math.floor(distance / (1000 * 60 * 60 * 24))
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24)
    const minutes = Math.floor((distance / 1000 / 60) % 60)
    const seconds = Math.floor((distance / 1000) % 60)

    return { days, hours, minutes, seconds }
  }

  return (
    <div
      id='event'
      className='relative min-h-screen bg-cover bg-center text-white flex flex-col items-center justify-center px-4'
      style={{
        backgroundImage: `url('https://placehold.co/1920x1080')`,
        backdropFilter: 'blur(4px)'
      }}
    >
      <div className='bg-gray-200 bg-opacity-80 p-8 rounded-lg border border-gray-600 text-center max-w-xl w-full'>
        <h1 className='text-gray-600 text-4xl font-bold mb-2'>The Big Day!</h1>

        <p className='text-lg mt-4 text-gray-600'>
          <strong>Thu Uyên & Hải Long</strong>
        </p>
        <p className='text-gray-600 text-sm mt-2'>
          Một lời chúc của bạn chắc chắn sẽ làm cho đám cưới của chúng tôi có thêm một niềm hạnh phúc!
        </p>

        <div className='flex justify-center space-x-4 mt-6'>
          <button className='border border-gray-600 px-4 py-2 rounded hover:bg-white text-gray-600 hover:text-black transition'>
            Gửi lời chúc
          </button>
          <button className='border border-gray-600 px-4 py-2 rounded hover:bg-white text-gray-600 hover:text-black transition'>
            Xác nhận tham dự
          </button>
        </div>

        <p className='text-gray-600 text-2xl mt-6 font-semibold'>9AM - 19 Tháng 5 2025</p>

        <div className='flex justify-center mt-4 space-x-6 text-center text-lg'>
          <div>
            <p className='text-gray-600 text-3xl font-bold'>{timeLeft.days}</p>
            <p className='text-gray-600'>Ngày</p>
          </div>
          <div>
            <p className='text-gray-600 text-3xl font-bold'>{timeLeft.hours}</p>
            <p className='text-gray-600'>Giờ</p>
          </div>
          <div>
            <p className='text-gray-600 text-3xl font-bold'>{timeLeft.minutes}</p>
            <p className='text-gray-600'>Phút</p>
          </div>
          <div>
            <p className='text-gray-600 text-3xl font-bold'>{timeLeft.seconds}</p>
            <p className='text-gray-600'>Giây</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SaveTheDatePage
