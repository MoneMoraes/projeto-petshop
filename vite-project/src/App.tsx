import { createBrowserRouter } from "react-router-dom"
import { Home } from "./pages/home"
import { Carrinho } from "./pages/carrinho"
import { Detalhes } from "./pages/detalhes"

import { Layout } from "./components/layout"

const router = createBrowserRouter([
  {
    element: <Layout/>,
    children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/carrinho",
        element: <Carrinho/>
      },
      {
        path: "/Detalhes/:id",
        element: <Detalhes/>
      }
    ]
  }
])

export {  router  };