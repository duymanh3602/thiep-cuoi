import { useEffect, useState } from 'react'
import PassKey from './components/PassKey'
import ShowData from './components/ShowData'

function App() {
  const [auth, setAuth] = useState(() => !!localStorage.getItem('passKey'))

  useEffect(() => {
    const handleStorageChange = () => {
      setAuth(!!localStorage.getItem('passKey'))
    }

    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [])

  return <div className='w-full bg-gray-100 flex flex-col'>{!auth ? <ShowData /> : <PassKey />}</div>
}

export default App
