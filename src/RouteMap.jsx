import React from 'react'
import {Routes, Route} from 'react-router-dom'
import HomePage from './Components/HomePage'

const RouteMap = () => {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>

  )
}

export default RouteMap
