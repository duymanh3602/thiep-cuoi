import React from 'react'
import { motion } from 'framer-motion'

const Overview: React.FC = () => {
  return (
    <section
      className='relative h-screen bg-cover bg-center flex items-center justify-center text-white'
      style={{ backgroundImage: "url('https://uyenlong.manhdinh.dev/BAC_6017.JPG')" }}
    >
      <div className='absolute inset-0 bg-opacity-60 z-0 backdrop-blur-[1px]' />
      <div className='relative z-10 text-center px-4'>
        <p className='text-lg tracking-widest uppercase text-gray-600 mb-2'>Save The Date</p>
        <div className='flex flex-col md:items-center md:space-x-2 text-center items-center justify-center'>
          <div className='flex flex-col md:flex-row md:items-center md:space-x-2 text-center items-center justify-center'>
            <span className='text-5xl text-gray-600 md:text-6xl'>Thu Uyên</span>
            <span className='text-5xl md:text-6xl text-pink-300'>&</span>
            <span className='text-5xl text-gray-600 md:text-6xl'>Hải Long</span>
          </div>
          <div className='w-20 border border-gray-600 h-[1px] mt-4 mb-2'></div>
        </div>
        <p className='text-gray-600 mb-6 mt-2'>17 Tháng 5 2025</p>
        <motion.a
          href='#wedding-info'
          whileHover={{ scale: 1.05 }}
          className='inline-block border border-gray-600 text-gray-600 px-5 py-2 rounded-full text-sm hover:bg-white hover:text-gray-800 transition'
        >
          Trân trọng kính mời !
        </motion.a>
      </div>
    </section>
  )
}

export default Overview
