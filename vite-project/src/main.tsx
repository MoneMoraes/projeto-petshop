import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {router} from './App'
import { RouterProvider } from 'react-router-dom'
import CarrinhoProvider from './context/carrinhoContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CarrinhoProvider>
      <RouterProvider router={router}/>
    </CarrinhoProvider>
  </StrictMode>,
)
