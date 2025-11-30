import { useState } from "react"
import Input from "../components/Input"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/auth"


const Login = () => {
  const navigate = useNavigate()
  const { storetoken }= useAuth()
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
         const response = await fetch('http://localhost:5000/api/auth/login',{
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
        alert('login successfull')
        navigate('/')
      }else{
        alert('login failed. Please try again.')
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
            id={"email"}
            name="email"
            value={user.email}
            onChange={handleChange}
          />
         <Input
            label={"Password"}
            id={"password"}
            name="password"
            value={user.password}
            onChange={handleChange}
          />
          <button type="submit" className="btn">Login</button>
       </form>
   </>
  )
}
 
export default Login