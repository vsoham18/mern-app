import { Outlet } from 'react-router'
import './App.css'
import Header from './components/Header.jsx'
import { AuthProvider } from './context/auth.jsx'
import { Bounce, ToastContainer } from 'react-toastify'
function App() {
 
  return (
    <AuthProvider> 
       <Header />
        <main>
        <Outlet />
<ToastContainer
  position="top-right"
  autoClose={3000}
  hideProgressBar={false}
  closeOnClick={false}
  pauseOnHover={true}
  draggable={true}
  progress={undefined}
  theme="light"
  transition={Bounce}
  className="toast-body"
/>
        </main>
    </AuthProvider>
  )
}
 
export default App
