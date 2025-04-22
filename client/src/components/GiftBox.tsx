import React from 'react'

const GiftBox: React.FC = () => {
  const gifts = [
    {
      title: 'Mừng cưới đến cô dâu',
      qr: 'https://placehold.co/500x500',
      bank: 'VIETCOMBANK',
      name: 'DINH THI THU UYEN',
      account: 'ABC123456789',
      branch: 'PGD ABC'
    },
    {
      title: 'Mừng cưới đến chú rể',
      qr: 'https://placehold.co/500x500',
      bank: 'VIETCOMBANK',
      name: 'DINH THI THU UYEN',
      account: 'ABC123456789',
      branch: 'PGD ABC'
    }
  ]

  return (
    <section id='gift-box' className='bg-white py-16 px-4 text-center'>
      <h2 className='text-4xl lg:text-6xl font-peristiwa text-gray-600 mb-8'>Hộp mừng cưới</h2>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 justify-center items-start max-w-4xl mx-auto'>
        {gifts.map((gift, index) => (
          <div key={index} className='bg-[#8c889a] text-white p-6 rounded-md border border-white shadow-md'>
            <h3 className='text-lg font-semibold mb-4'>{gift.title}</h3>
            <img
              src={gift.qr}
              alt={`QR ${gift.name}`}
              className='mx-auto w-60 h-60 object-contain mb-4 border-4 border-white'
            />
            <p className='text-sm'>Ngân hàng: {gift.bank}</p>
            <p className='text-sm'>Tên tài khoản: {gift.name}</p>
            <p className='text-sm'>Số tài khoản: {gift.account}</p>
            <p className='text-sm'>Chi nhánh: {gift.branch}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default GiftBox
