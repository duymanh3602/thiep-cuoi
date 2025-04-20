import React from 'react'
import { MapPin, Clock } from 'lucide-react'

interface WeddingEvent {
  title: string
  time: string
  location: string
  image: string
}

const events: WeddingEvent[] = [
  {
    title: 'LỄ CƯỚI NHÀ GÁI',
    time: '09:00 19/05/2025',
    location: 'Tổ 7, phường Cam Giá, TP. Thái Nguyên, Tỉnh Thái Nguyên',
    image: 'https://placehold.co/300x300'
  },
  {
    title: 'LỄ CƯỚI NHÀ TRAI',
    time: '09:00 19/05/2025',
    location: 'Tổ 7, phường Cam Giá, TP. Thái Nguyên, Tỉnh Thái Nguyên',
    image: 'https://placehold.co/300x300'
  }
]

const WeddingEvent: React.FC = () => {
  return (
    <section
      className='relative py-16 px-4 bg-cover bg-center min-h-[100vh] flex items-center justify-center'
      style={{ backgroundImage: `url('https://placehold.co/1920x1080')` }}
    >
      <div className='bg-gray-200 border border-gray-600 bg-opacity-40 p-6 md:p-10 rounded-xl max-w-3xl w-full text-white'>
        <h2 className='text-3xl text-gray-600 md:text-4xl font-bold text-center mb-4'>Sự Kiện Cưới</h2>
        <p className='text-gray-600 text-center text-sm md:text-base mb-8'>
          Tình yêu đích thực đứng vững phía nhau trong những ngày tốt đẹp và sát cánh hơn trong những ngày tồi tệ.
        </p>

        <div className='space-y-6'>
          {events.map((event, index) => (
            <div
              key={index}
              className='bg-white items-center flex bg-opacity-90 rounded-xl p-4 flex items-start space-x-4 border border-gray-300'
            >
              <img
                src={event.image}
                alt={event.title}
                className='w-14 h-14 md:w-16 md:h-16 rounded-full object-cover border'
              />
              <div className='flex-1'>
                <h3 className='text-lg md:text-xl font-semibold text-gray-800 mb-2'>{event.title}</h3>
                <div className='flex items-center text-gray-700 text-sm mb-1'>
                  <Clock className='w-4 h-4 mr-1' />
                  {event.time}
                </div>
                <div className='flex items-center text-gray-700 text-sm'>
                  <MapPin className='w-4 h-4 mr-1' />
                  {event.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WeddingEvent
