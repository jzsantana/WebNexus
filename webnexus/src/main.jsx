import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider,BrowserRouter, Routes, Route} from 'react-router-dom'
import './index.css'

import Home from './pages/Home'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
