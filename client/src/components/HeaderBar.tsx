import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const HeaderBar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false)
  return (
    <div className='flex items-center justify-between bg-gray-800 p-4 sticky top-0 w-full z-50 bg-white text-gray-800 shadow-md px-5 lg:px-20'>
      <div>
        <span className='text-gray-600 text-xl'>Thu Uyên ❤ Hải Long</span>
      </div>
      <div className='relative'></div>
      <button
        className='lg:hidden text-gray-600 focus:outline-none'
        onClick={() => setDropdownVisible(!dropdownVisible)}
      >
        {dropdownVisible ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
      </button>
      {dropdownVisible && (
        <div className='absolute right-[10px] top-[60px] mt-2 w-48 bg-white rounded-md shadow-lg lg:hidden'>
          <ul className='py-1'>
            <li>
              <a href='#love-story' className='block px-4 py-2 text-gray-600 hover:bg-gray-100'>
                Chuyện tình
              </a>
            </li>
            <li>
              <a href='#album' className='block px-4 py-2 text-gray-600 hover:bg-gray-100'>
                Album ảnh cưới
              </a>
            </li>
            <li>
              <a href='#event' className='block px-4 py-2 text-gray-600 hover:bg-gray-100'>
                Sự kiện cưới
              </a>
            </li>
            <li>
              <a href='#guest-book' className='block px-4 py-2 text-gray-600 hover:bg-gray-100'>
                Sổ lưu bút
              </a>
            </li>
            <li>
              <a href='#gift-box' className='block px-4 py-2 text-gray-600 hover:bg-gray-100'>
                Mừng cưới
              </a>
            </li>
          </ul>
        </div>
      )}
      <nav className='hidden lg:block'>
        <ul className='flex space-x-4'>
          <div>
            <a href='#love-story' className='text-gray-600 font-semibold hover:text-gray-400'>
              Chuyện tình
            </a>
          </div>
          <li>
            <a href='#album' className='text-gray-600 font-semibold hover:text-gray-400'>
              Album ảnh cưới
            </a>
          </li>
          <li>
            <a href='#event' className='text-gray-600 font-semibold hover:text-gray-400'>
              Sự kiện cưới
            </a>
          </li>
          <li>
            <a href='#guest-book' className='text-gray-600 font-semibold hover:text-gray-400'>
              Sổ lưu bút
            </a>
          </li>
          <li>
            <a href='#gift-box' className='text-gray-600 font-semibold hover:text-gray-400'>
              Mừng cưới
            </a>
          </li>
        </ul>
      </nav>
      <div className='absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg hidden sm:hidden'>
        <ul className='py-1'>
          <li>
            <a href='#love-story' className='block px-4 py-2 text-gray-600 hover:bg-gray-100'>
              Chuyện tình
            </a>
          </li>
          <li>
            <a href='#album' className='block px-4 py-2 text-gray-600 hover:bg-gray-100'>
              Album ảnh cưới
            </a>
          </li>
          <li>
            <a href='#event' className='block px-4 py-2 text-gray-600 hover:bg-gray-100'>
              Sự kiện cưới
            </a>
          </li>
          <li>
            <a href='#guest-book' className='block px-4 py-2 text-gray-600 hover:bg-gray-100'>
              Sổ lưu bút
            </a>
          </li>
          <li>
            <a href='#gift-box' className='block px-4 py-2 text-gray-600 hover:bg-gray-100'>
              Mừng cưới
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default HeaderBar
