import PassKey from './components/PassKey'
import ShowData from './components/ShowData'

function App() {
  const passKey = localStorage.getItem('passKey')
  return <div className='w-full bg-gray-100 flex flex-col'>{passKey ? <ShowData /> : <PassKey />}</div>
}

export default App
