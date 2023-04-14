import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import LoginUser from './components/LoginUser'
import Profile from './components/Profile'
import { RouterProvider, createBrowserRouter} from 'react-router-dom'
import UserProvider from './context/UserContext'

const router = createBrowserRouter([
  {
    path: '/',
    element:<UserProvider><App /></UserProvider> 
  },
  {
    path: '/login',
    element: <LoginUser />
  },
  {
    path:'/profile',
    element: <Profile />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
