import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router'
import AllRoutes from './Routes/AllRoutes.jsx'
import { Toaster } from 'react-hot-toast'



createRoot(document.getElementById('root')).render(
  <StrictMode>

    <BrowserRouter>
          <AllRoutes></AllRoutes>
          <Toaster></Toaster>
    </BrowserRouter>
    
  </StrictMode>,
)
