import React, { useEffect, useState } from 'react'
import { handleAddComment, handleGetData } from '../utils/fetcher'

interface Message {
  name: string
  message: string
}

const GuestBook: React.FC = () => {
  const [form, setForm] = useState({ name: '', message: '' })
  const [messages, setMessages] = useState<Message[]>([])

  useEffect(() => {
    handleGetData().then((res) => {
      if (res.data) {
        const data = res.data.map((item) => ({
          name: item.name,
          message: item.content
        }))
        setMessages(data)
      }
    })
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (form.name && form.message) {
      handleAddComment(form).then(() => {
        setMessages([{ ...form }, ...messages])
        setForm({ name: '', message: '' })
      })
    }
  }

  return (
    <section id='guest-book' className='relative bg-gray-50 py-16 px-4 flex justify-center items-center min-h-screen'>
      <div className='bg-white shadow-xl border border-gray-200 rounded-xl max-w-2xl w-full p-6 relative overflow-hidden z-2'>
        <h2 className='text-center text-4xl lg:text-6xl font-peristiwa text-gray-700 mb-6'>Sổ Lưu Bút</h2>

        <form onSubmit={handleSubmit} className='space-y-4 mb-8'>
          <input
            name='name'
            value={form.name}
            onChange={handleChange}
            required
            placeholder='Tên của bạn*'
            className='w-full border border-gray-300 p-2 rounded-md focus:outline-none'
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
            <span className='text-red-400'> ❤</span>
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
