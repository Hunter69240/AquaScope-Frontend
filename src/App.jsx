import React from 'react'
import LandingPage from './screens/LandingPage'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  

  return (
    <>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
    </Routes>
    
    </>
  )
}

export default App
