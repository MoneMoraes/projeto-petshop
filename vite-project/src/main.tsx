import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {router} from './App'
import { RouterProvider } from 'react-router-dom'
import CarrinhoProvider from './context/carrinhoContext'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CarrinhoProvider>
    <Toaster
      position="top-center"
      reverseOrder={false}
/>
      <RouterProvider router={router}/>
    </CarrinhoProvider>
  </StrictMode>,
)
