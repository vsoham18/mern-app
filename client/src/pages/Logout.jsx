import { Navigate } from "react-router";
import { useAuth } from "../context/auth";
import { useEffect } from "react";

 const Logout = () =>{
    const {logoutUser} = useAuth()
    useEffect(()=>{
        logoutUser()
    },[logoutUser])
    return(
        <Navigate to="/" />
    )
}
export default Logout;