import { Link } from "react-router"
import Navlink from "./Navlink"

const Header = () => {
  return (
    <>
     <nav className="header">
      <div className="logo">      
          <Link to="/" >MyApp</Link>
      </div>
      <div className="services">
            <Navlink page="/"/>
            <Navlink page="About"/>
            <Navlink page="Contact"/>
            <Navlink page="Service"/>
            <Navlink page="Login"/>
            <Navlink page="SignUp"/>
           
      </div>
     </nav>

    </>
  )
}

export default Header