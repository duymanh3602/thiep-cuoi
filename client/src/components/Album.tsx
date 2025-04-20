import React from 'react'

const images = [
  'https://placehold.co/300x400',
  'https://placehold.co/300x500',
  'https://placehold.co/300x450',
  'https://placehold.co/300x350',
  'https://placehold.co/300x600',
  'https://placehold.co/300x400',
  'https://placehold.co/300x500',
  'https://placehold.co/300x380',
  'https://placehold.co/300x470',
  'https://placehold.co/300x520',
  'https://placehold.co/300x430',
  'https://placehold.co/300x390'
]

const Album: React.FC = () => {
  return (
    <section id='album' className='py-16 bg-white text-center' id='album'>
      <h2 className='text-2xl font-semibold text-gray-700 mb-2'>Album Hình Cưới</h2>
      <div className='w-20 h-1 bg-gray-300 mx-auto mb-8 rounded' />

      <div className='columns-2 md:columns-3 gap-4 px-4 max-w-5xl mx-auto space-y-4'>
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Ảnh cưới ${index + 1}`}
            className='rounded-lg shadow-md w-full hover:scale-105 transition-transform'
          />
        ))}
      </div>

      <div className='mt-10'>
        <a
          href='#all-photos'
          className='inline-block bg-blue-100 text-blue-600 px-6 py-2 rounded-full text-sm hover:bg-blue-200 transition'
        >
          Tất cả hình ảnh
        </a>
      </div>
    </section>
  )
}

export default Album
