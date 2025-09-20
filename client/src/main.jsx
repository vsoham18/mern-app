import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom' 

import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Service from './pages/Service.jsx'

const router = createBrowserRouter([
  {
      path: '/',
      element: <App />,
      children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/contact', element: <Contact/>},
      { path: '/login', element: <Login/>},
      { path: '/SignUp', element: <Register/>},
      { path: '/service', element: <Service/>}
    ]
  }
])

const root=createRoot(document.querySelector('#root'))
root.render(<RouterProvider router={router} />)

