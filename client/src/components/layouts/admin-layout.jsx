import { Outlet , NavLink} from "react-router"
import { useAuth } from "../../context/auth"

export const AdminLayout = () => {
       const { user } = useAuth()
      
       if(!user || !user.isadmin ){
        return <h1>Access Denied</h1>
       }
  return (
    <>
    <div className="admin-pannel">
         <NavLink to={'/admin/users'}> users </NavLink>
         <NavLink to={'/admin/contacts'}> Contact </NavLink>
         <NavLink to={'/admin/services'}> Services </NavLink>
         <NavLink to={'/'}> Home </NavLink>
    </div>
   <Outlet/>
    </>
  )
}  
