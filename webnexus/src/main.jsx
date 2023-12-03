import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'

import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
// import Cadastro from './pages/Cadastro/Cadastro'
import UserPage from './pages/UserPage/UserPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  // {
  //   path: "/cadastro",
  //   element: <Cadastro/>
  // },
  {
    path: "/userpage",
    element: <UserPage/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
