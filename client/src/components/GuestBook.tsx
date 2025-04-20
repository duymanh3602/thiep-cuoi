import React, { useState } from 'react'

interface Message {
  name: string
  email: string
  message: string
}

const GuestBook: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [messages, setMessages] = useState<Message[]>([
    {
      name: 'Nhung Duy',
      email: '',
      message: 'Chúc đôi vợ chồng trẻ trăm năm hạnh phúc 🏡'
    },
    {
      name: 'Lê Sơn',
      email: '',
      message: 'Chúc anh chị trăm năm hạnh phúc nhé 🌹'
    },
    {
      name: 'Khánh Ngọc (miu)',
      email: '',
      message: 'Chúc người đẹp của em về nhà chồng thật đẹp 😻💐🌹'
    },
    {
      name: 'Đinh Tuyết',
      email: '',
      message:
        'Chúc mừng hạnh phúc bạn! Mong rằng lễ cưới này là cái kết đẹp của tình yêu và là khởi đầu tươi đẹp cho hành trình trọn đời bên nhau.'
    }
  ])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (form.name && form.message) {
      setMessages([{ ...form }, ...messages])
      setForm({ name: '', email: '', message: '' })
    }
  }

  return (
    <section id='guest-book' className='bg-gray-50 py-16 px-4 flex justify-center items-center min-h-screen'>
      <div className='bg-white shadow-xl border border-gray-200 rounded-xl max-w-2xl w-full p-6 relative overflow-hidden'>
        <h2 className='text-center text-3xl text-gray-700 mb-6'>Sổ Lưu Bút</h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className='space-y-4 mb-8'>
          <input
            name='name'
            value={form.name}
            onChange={handleChange}
            required
            placeholder='Tên của bạn*'
            className='w-full border border-gray-300 p-2 rounded-md focus:outline-none'
          />
          <input
            name='email'
            value={form.email}
            onChange={handleChange}
            placeholder='E-mail'
            className='w-full border border-gray-300 p-2 rounded-md focus:outline-none'
            type='email'
          />
          <textarea
            name='message'
            value={form.message}
            onChange={handleChange}
            required
            placeholder='Nhập lời chúc của bạn*'
            rows={3}
            className='w-full border border-gray-300 p-2 rounded-md focus:outline-none resize-none'
          ></textarea>
          <button
            type='submit'
            className='w-full bg-purple-100 text-gray-800 py-2 rounded-md border border-purple-300 hover:bg-purple-200 transition'
          >
            GỬI LỜI CHÚC
          </button>
        </form>

        {/* Messages */}
        <div className='space-y-4 max-h-[300px] overflow-y-auto'>
          {messages.map((m, idx) => (
            <div key={idx} className='border border-gray-300 p-3 rounded-md bg-white text-sm'>
              <p className='font-semibold text-gray-800'>{m.name}</p>
              <hr className='my-1 border-dotted border-gray-400' />
              <p className='text-gray-700 whitespace-pre-line'>{m.message}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GuestBook
