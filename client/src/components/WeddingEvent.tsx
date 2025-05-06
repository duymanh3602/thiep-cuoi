import React from 'react'
import { MapPin, Clock } from 'lucide-react'

interface WeddingEvent {
  title: string
  time: string
  location: string
  image: string
  map: string
}

const events: WeddingEvent[] = [
  {
    title: 'TIỆC CƯỚI NHÀ GÁI',
    time: '16:00 16/05/2025',
    location: 'Tổ 7, phường Cam Giá, TP. Thái Nguyên, Tỉnh Thái Nguyên',
    image: 'https://uyenlong.manhdinh.dev/BAC_5815.JPG',
    map: 'https://maps.app.goo.gl/ZR4NcUP629gPnJxs7'
  },
  {
    title: 'LỄ VU QUY',
    time: '08:00 17/05/2025',
    location: 'Tổ 7, phường Cam Giá, TP. Thái Nguyên, Tỉnh Thái Nguyên',
    image: 'https://uyenlong.manhdinh.dev/BAC_5815.JPG',
    map: 'https://maps.app.goo.gl/ZR4NcUP629gPnJxs7'
  },
  {
    title: 'TIỆC CƯỚI NHÀ TRAI',
    time: '16:00 16/05/2025',
    location: 'Tổ 10, phường Phú Xá, TP. Thái Nguyên, Tỉnh Thái Nguyên',
    image: 'https://uyenlong.manhdinh.dev/BAC_5996.JPG',
    map: ''
  },
  {
    title: 'LỄ THÀNH HÔN',
    time: '09:30 17/05/2025',
    location: 'Tổ 10, phường Phú Xá, TP. Thái Nguyên, Tỉnh Thái Nguyên',
    image: 'https://uyenlong.manhdinh.dev/BAC_5996.JPG',
    map: ''
  }
]

const WeddingEvent: React.FC = () => {
  return (
    <section
      className='relative py-16 px-4 bg-cover bg-center min-h-[100vh] flex items-center justify-center'
      style={{ backgroundImage: `url('https://uyenlong.manhdinh.dev/BAC_5920.JPG')` }}
    >
      <div className='bg-gray-200/60 border border-gray-600 bg-opacity-40 p-6 md:p-10 rounded-xl max-w-3xl w-full text-white'>
        <h2 className='text-4xl lg:text-6xl text-gray-600 text-center font-peristiwa mb-4'>Sự kiện cưới</h2>
        <p className='text-gray-600 text-center text-sm md:text-base mb-8'>
          Tình yêu đích thực đứng vững phía nhau trong những ngày tốt đẹp và sát cánh hơn trong những ngày tồi tệ.
        </p>

        <div className='space-y-6'>
          {events.map((event, index) => (
            <div
              key={index}
              className='bg-white items-center flex bg-opacity-90 rounded-xl p-4 flex space-x-4 border border-gray-300 cursor-pointer hover:shadow-lg transition duration-300 relative group'
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
              {event.map && (
                <a
                  href={`${event.map}`}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hidden lg:block inset-x-0 bottom-2 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                  title='Chỉ đường'
                >
                  <button className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300'>
                    Chỉ đường
                  </button>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WeddingEvent
