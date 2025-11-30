import {  createContext, useContext, useState } from "react";

export const AuthContext = createContext();
  
export const AuthProvider = ({children}) =>{
   const [token, setToken] = useState(localStorage.getItem('token'))

    const storetoken = (serverToken) =>{
       return localStorage.setItem('token', serverToken)
    }

    let isloggedin = !!token

    const logoutUser =()=>{
         setToken("")
      return localStorage.removeItem('token')
    }
    return(
        <AuthContext.Provider value={{storetoken, isloggedin, logoutUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () =>{
    return useContext(AuthContext)
}