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
import Error from './pages/Error.jsx'
import Logout from './pages/Logout.jsx'

const router = createBrowserRouter([
  {
      path: '/',
      element: <App />,
      children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/contact', element: <Contact/>},
      { path: '/login', element: <Login/>},
      { path: '/signup', element: <Register/>},
      { path: '/service', element: <Service/>},
      { path: '/logout', element: <Logout/> },
      { path: '*', element: <Error/> }
    ]
  }
])

const root=createRoot(document.querySelector('#root'))
root.render(<RouterProvider router={router} />)

