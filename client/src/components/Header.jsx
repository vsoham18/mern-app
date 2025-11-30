import { Link } from "react-router-dom"
import Navlink from "./Navlink"
import { useAuth } from "../context/auth"
const Header = () => {
  const {isloggedin} = useAuth()
  return (
    <>
     <nav className="header">
      <div className="logo">      
          <Link to="/" >MyApp</Link>
      </div>
      <div className="services">
            <Navlink page="/"/> 
            <Navlink page="about"/>
            <Navlink page="contact"/>
            <Navlink page="service"/>
            {
            isloggedin ? <Navlink page="logout"/> :
             <>
            <Navlink page="login"/>
            <Navlink page="signUp"/>
            </> 
            }
            
      </div>
     </nav>

    </>
  )
}

export default Header