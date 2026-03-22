import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import SplashScreen from './components/SplashScreen'
import Home from './components/Home'
import ProjectDetail from './page/ProjectDetail'
import ScrollToTop from './components/ScrollToTop' // 1. Import มาใช้

function App() {
  const [loading, setLoading] = useState(true)
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    const exitTimer = setTimeout(() => {
      setIsExiting(true)
    }, 2500)

    const timer = setTimeout(() => {
      setLoading(false)
    }, 3500)

    return () => {
      clearTimeout(exitTimer)
      clearTimeout(timer)
    }
  }, [])

  return (
    <>
      {loading ? (
        <SplashScreen isExiting={isExiting} />
      ) : (
        <BrowserRouter>
          {/* 2. วาง ScrollToTop ไว้ตรงนี้ */}
          <ScrollToTop /> 
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  )
}

export default App