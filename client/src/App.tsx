import Album from './components/Album'
import GiftBox from './components/GiftBox.tsx'
import DateStory from './components/DateStory'
import Footer from './components/Footer.tsx'
import GuestBook from './components/GuestBook'
import HeaderBar from './components/HeaderBar'
import Overview from './components/Overview'
import SaveTheDatePage from './components/SaveTheDate.tsx'
import WeddingEvent from './components/WeddingEvent'
import Lottie from 'lottie-react'
import lottie from './assets/lottie.json'
import { useState } from 'react'

function App() {
  const [showLottie, setShowLottie] = useState(true)

  return (
    <div className='w-full flex flex-col'>
      {showLottie ? (
        <div className='w-full h-screen flex flex-col justify-center items-center'>
          <div className='h-80 w-80'>
            <Lottie animationData={lottie} onLoopComplete={() => setShowLottie(false)} />
          </div>
          <div className='flex justify-center items-center'>
            <h1 className='text-[#d0335f] text-4xl font-bold'>Thu Uyên & Hải Long</h1>
          </div>
        </div>
      ) : (
        <>
          <HeaderBar />
          <Overview />
          <DateStory />
          <SaveTheDatePage />
          <Album />
          <WeddingEvent />
          <GuestBook />
          <GiftBox />
          <Footer />
        </>
      )}
    </div>
  )
}

export default App
