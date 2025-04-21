import React from 'react'

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

type Props = {
  data: DataItem[]
}

const DataTable: React.FC<Props> = () => {
  const [data, setData] = React.useState<DataItem[]>([])
  return (
    <div className='p-4'>
      <h2 className='text-xl font-semibold mb-4'>Data Table</h2>
      <table className='min-w-full border border-gray-300'>
        <thead className='bg-gray-100'>
          <tr>
            <th className='border px-4 py-2'>ID</th>
            <th className='border px-4 py-2'>Type</th>
            <th className='border px-4 py-2'>Name</th>
            <th className='border px-4 py-2'>Show Name</th>
            <th className='border px-4 py-2'>Guest Book</th>
            <th className='border px-4 py-2'>Created At</th>
            <th className='border px-4 py-2'>Updated At</th>
            <th className='border px-4 py-2'>Is Seen</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className='text-center'>
              <td className='border px-4 py-2'>{item.id}</td>
              <td className='border px-4 py-2'>{item.type}</td>
              <td className='border px-4 py-2'>{item.name}</td>
              <td className='border px-4 py-2'>{item.showName}</td>
              <td className='border px-4 py-2'>{item.guestBook ?? 'N/A'}</td>
              <td className='border px-4 py-2'>{new Date(item.createdAt).toLocaleString()}</td>
              <td className='border px-4 py-2'>{new Date(item.updatedAt).toLocaleString()}</td>
              <td className='border px-4 py-2'>{item.isSeen ? 'Yes' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DataTable
