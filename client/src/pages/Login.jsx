import { useState } from "react"
import Input from "../components/Input"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/auth"
import { toast } from 'react-toastify';


const Login = () => {
  const navigate = useNavigate()
  const { storetoken,url }= useAuth()
  const [user,setUser] = useState({
    email: '',
    password: ''
  })
  const handleChange = (e)=>{ 
       const { name, value } = e.target
       setUser(prev => ({ ...prev, [name]: value }))
  }
const handleSubmit = async(e) =>{
      e.preventDefault()
      try{
         const response = await fetch(`${url}/api/auth/login`,{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
      }) 
     
      if(response.ok){ 
        const resData = await response.json()
        storetoken(resData.token)   
        setUser({ email: '', password: '' })
        toast.success(resData.msg)
        navigate('/')
      }else{
        const resData =  await response.json()
        console.log(resData);
        toast.error( resData.extraDetails ? resData.extraDetails : resData.message)
        }
      }catch(err){
        console.error('Error during login:', err)
      }
  }
  return (
   <>
     <div className="heading">Login Form</div>
       <form className="login-form" onSubmit={handleSubmit}>
         <Input
            label={"Email"}
            id={"Email"}
            name="email"
            value={user.email}
            type={"email"}
            onChange={handleChange}
          />
         <Input
            label={"Password"}
            id={"Password"}
            name="password"
            value={user.password}
            type={"password"}
            onChange={handleChange}
          />
          <button type="submit" className="btn">Login</button>
       </form>
   </>
  )
}
 
export default Login