import Modal from 'react-modal'
import React, { useEffect } from 'react'
import { handleGetData } from '../utils/fetcher'

type DataItem = {
  id: string
  type: number
  name: string
  showName: string
  guestBook: string | null
  createdAt: string
  updatedAt: string
  isSeen: number
}

const DataTable = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const [selectedItem, setSelectedItem] = React.useState<DataItem | null>(null)
  const [data, setData] = React.useState<DataItem[]>([])
  const [searchTerm, setSearchTerm] = React.useState<string>('')
  const [isCopied, setIsCopied] = React.useState(false)

  useEffect(() => {
    handleGetData().then((res) => {
      if (res.status === 200) {
        setData(res.data)
      } else {
        console.error('Error fetching data')
      }
    })
  }, [])

  const filteredData = data.filter((item) => {
    return (
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.showName.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })

  const openModal = (item: DataItem) => {
    setSelectedItem(item)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setSelectedItem(null)
    setIsModalOpen(false)
  }

  const handleCopyLink = (id: string) => {
    const link = `https://example.com/invite/${id}`
    navigator.clipboard.writeText(link).then(() => {
      setIsCopied(true)
      alert('Link đã được sao chép vào clipboard!')
    })
  }

  useEffect(() => {
    if (selectedItem == null) {
      setIsCopied(false)
    }
  }, [selectedItem])

  return (
    <>
      <div className='p-4'>
        <div className='flex justify-between items-center mb-4'>
          <h2 className='text-xl font-semibold mb-4'>Danh sách mời</h2>
          <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-4'>Thêm mới</button>
        </div>
        <div className='mb-4'>
          <input
            type='text'
            placeholder='Tìm kiếm theo tên...'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className='border px-4 py-2 w-full'
          />
        </div>
        <div className='overflow-x-auto'>
          <table className='min-w-full border border-gray-300'>
            <thead className='bg-gray-100'>
              <tr>
                <th className='border px-4 py-2'>Tên đánh dấu</th>
                <th className='border px-4 py-2'>Tên hiển thị</th>
                <th className='border px-4 py-2'>Xem thêm</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item) => (
                <tr key={item.id} className='text-center'>
                  <td className='border px-4 py-2'>{item.name}</td>
                  <td className='border px-4 py-2'>{item.showName}</td>
                  <td className='border px-4 py-2'>
                    <button
                      className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
                      onClick={() => openModal(item)}
                    >
                      Xem thêm
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel='Chi tiết'
        className='bg-white p-6 rounded shadow-lg max-w-md mx-auto mt-20'
        overlayClassName='fixed inset-0 bg-gray-200 bg-opacity-50 flex justify-center items-center'
      >
        {selectedItem && (
          <div>
            <h2 className='text-xl font-semibold mb-4'>Chi tiết thiệp mời</h2>
            <p>
              <strong>Tên đánh dấu:</strong> {selectedItem.name}
            </p>
            <p>
              <strong>Tên hiển thị:</strong> {selectedItem.showName}
            </p>
            <p>
              <strong>Sổ khách:</strong> {selectedItem.guestBook || 'Không có'}
            </p>
            <p>
              <strong>Ngày tạo:</strong> {selectedItem.createdAt}
            </p>
            <p>
              <strong>Ngày cập nhật:</strong> {selectedItem.updatedAt}
            </p>
            <div className='flex justify-between mt-4'>
              <button className='bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 mt-4' onClick={closeModal}>
                Đóng
              </button>
              <button
                className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-red-600 mt-4'
                onClick={() => handleCopyLink(selectedItem.id)}
              >
                {isCopied ? 'Đã sao chép ✔' : 'Sao chép 🔗'}
              </button>
            </div>
          </div>
        )}
      </Modal>
    </>
  )
}
export default DataTable
