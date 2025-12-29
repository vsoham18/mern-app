import {  createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";

export const AuthContext = createContext();
  
export const AuthProvider = ({children}) =>{
   const url = 'https://mern-app-backened.onrender.com'
   const [token, setToken] = useState(localStorage.getItem('token'))
   const [user, setUser] = useState("")
   const navigate = useNavigate() 
     
   //  JWT token store in local storage
    const storetoken = (serverToken) =>{
        setToken(serverToken)
       return localStorage.setItem('token', serverToken)
    }

    let isloggedin = !!token

    const logoutUser =()=>{
         setToken("")
         setUser("")
      return localStorage.removeItem('token')
    }

    // #fetch user details
    const getuserDetails = async()=>{
        try{
            const response = await fetch(`${url}/contact`,{
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  'authorization': `Bearer ${token}`
                }
            })
            if(response.ok){
              const data = await response.json()
                setUser(data)
            }
        }catch(err){
          console.error('Error during fetching user details:', err)
        }
    }

    //   #jwt authenticate
       useEffect(()=>{
        console.log('hii');
          getuserDetails()
       },[token])
   
    return(
        <AuthContext.Provider value={{token,storetoken, isloggedin, logoutUser,user,url}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () =>{
    return useContext(AuthContext)
}