import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import RouteMap from './RouteMap'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <div>
    <BrowserRouter>
      <main>
        <RouteMap />
      </main>
    </BrowserRouter>
  </div>
)

