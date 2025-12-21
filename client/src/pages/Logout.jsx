import { Navigate } from "react-router";
import { useAuth } from "../context/auth";
import { useEffect } from "react";

 const Logout = () =>{
    const {logoutUser} = useAuth()
    useEffect(()=>{
        logoutUser()
    },[logoutUser])
    console.log("logout")
    return(
        <Navigate to="/" />
    )
}
export default Logout;