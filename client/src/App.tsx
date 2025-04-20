import Album from './components/Album'
import GiftBox from './components/GiftBox.tsx'
import DateStory from './components/DateStory'
import Footer from './components/Footer.tsx'
import GuestBook from './components/GuestBook'
import HeaderBar from './components/HeaderBar'
import Overview from './components/Overview'
import SaveTheDatePage from './components/SaveTheDate.tsx'
import WeddingEvent from './components/WeddingEvent'

function App() {
  return (
    <div className='w-full bg-gray-100 flex flex-col'>
      <HeaderBar />
      <Overview />
      <DateStory />
      <SaveTheDatePage />
      <Album />
      <WeddingEvent />
      <GuestBook />
      <GiftBox />
      <Footer />
    </div>
  )
}

export default App
