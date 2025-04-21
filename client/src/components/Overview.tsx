import React from 'react'
import { motion } from 'framer-motion'

const Overview: React.FC = () => {
  return (
    <section
      className='relative h-screen bg-cover bg-center flex items-center justify-center text-white'
      style={{ backgroundImage: "url('https://placehold.co/1920x1080')" }}
    >
      <div className='absolute inset-0 bg-opacity-60 z-0' />
      <div className='relative z-10 text-center px-4'>
        <p className='text-sm tracking-widest uppercase text-gray-600 mb-2'>Save The Date</p>
        <h1 className='text-4xl md:text-5xl mb-2'>
          <span className='text-gray-600'>Thu Uyên</span> <span className='text-pink-300'>&</span>{' '}
          <span className='text-gray-600'>Hải Long</span>
        </h1>
        <p className='text-gray-600 mb-6'>17 Tháng 5 2025</p>
        <motion.a
          href='#wedding-info'
          whileHover={{ scale: 1.05 }}
          className='inline-block border border-gray-600 text-gray-600 px-5 py-2 rounded-full text-sm hover:bg-white hover:text-gray-800 transition'
        >
          Đến dự cưới
        </motion.a>
      </div>
    </section>
  )
}

export default Overview
