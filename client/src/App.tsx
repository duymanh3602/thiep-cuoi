import { useState, useEffect } from 'react'
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

function App() {
  const [showLottie, setShowLottie] = useState(true)
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsHeaderVisible(false) // Hide header when scrolling down
      } else {
        setIsHeaderVisible(true) // Show header when scrolling up
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollY])

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
          <div
            className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
              isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
            }`}
          >
            <HeaderBar />
          </div>
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
