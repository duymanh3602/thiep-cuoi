import React, { useMemo, useState } from 'react'

import { ColumnsPhotoAlbum } from 'react-photo-album'
import 'react-photo-album/columns.css'

import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen'
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow'
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import 'yet-another-react-lightbox/plugins/thumbnails.css'
import photos from './photos'

// const images = [
//   'https://placehold.co/300x400',
//   'https://placehold.co/300x500',
//   'https://placehold.co/300x450',
//   'https://placehold.co/300x350',
//   'https://placehold.co/300x600',
//   'https://placehold.co/300x400',
//   'https://placehold.co/300x500',
//   'https://placehold.co/300x380',
//   'https://placehold.co/300x470',
//   'https://placehold.co/300x520',
//   'https://placehold.co/300x430',
//   'https://placehold.co/300x390'
// ]

const Album: React.FC = () => {
  const [index, setIndex] = useState(-1)

  const photoList = useMemo(() => {
    if (index >= 0) {
      return photos
    }
    return photos.slice(0, 10)
  }, [index])

  return (
    <section id='album' className='py-16 bg-white text-center'>
      <h2 className='text-4xl lg:text-6xl text-gray-700 mb-2 font-peristiwa'>Album ảnh cưới</h2>
      <div className='w-20 h-1 bg-gray-300 mx-auto mb-8 rounded' />
      <div className='max-w-5xl mx-auto px-4'>
        <ColumnsPhotoAlbum photos={photoList} onClick={({ index }) => setIndex(index)} />
      </div>

      <Lightbox
        slides={photoList}
        open={index >= 0}
        index={index}
        close={() => {
          setIndex(-1)
        }}
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />

      <div className='mt-10'>
        <button
          onClick={() => {
            setIndex(1)
          }}
          className='inline-block bg-blue-100 text-blue-600 px-6 py-2 rounded-full text-sm hover:bg-blue-200 transition'
        >
          Tất cả hình ảnh
        </button>
      </div>
    </section>
  )
}

export default Album
