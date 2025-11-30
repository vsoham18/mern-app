import { Outlet } from 'react-router'
import './App.css'
import Header from './components/Header.jsx'
import { AuthProvider } from './context/auth.jsx'

function App() {
 
  return (
    <AuthProvider> 
       <Header />
        <main>
        <Outlet />
        </main>
    </AuthProvider>
  )
}
 
export default App
