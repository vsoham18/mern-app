import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Input from "../components/Input.jsx"
import { useAuth } from "../context/auth.jsx"
import { toast } from 'react-toastify';


const Register = () => {
  const [form, setForm] = useState({
    userName: '',
    email: '',
    phone: '',
    password: ''
  })
  const navigate = useNavigate()

  const { storetoken } = useAuth()

  const handleChange = (e)=>{
       const { name, value } = e.target
       setForm(prev => ({ ...prev, [name]: value }))
  }
  const handleSubmit = async(e) =>{
    e.preventDefault()
      try{
         const response = await fetch('http://localhost:5000/api/auth/register',{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
      })  
      if(response.ok){ 
        const resData = await response.json() 
        setForm({ userName: '', email: '', phone: '', password: '' })
        toast.success(resData.msg)
        navigate('/login')
      }else{
        const resData = await response.json()
        toast.error(resData.extraDetails ? resData.extraDetails : resData.message)
      }
      }catch(err){
        console.error('Error during registration:', err)
      }    
  }
  return (
    <div>
       <form className="register-form" onSubmit={handleSubmit}>

          <Input
            label={"Username"}
            id={"Username"}
            name="userName"
            value={form.userName}
            onChange={handleChange}
          />
          <Input
            label={"Email"}
            id={"Email"}
            name="email"
            value={form.email}
            onChange={handleChange}
          />
          <Input
            label={"Phone"}
            id={"Phone"}
            name="phone"
            value={form.phone}
            onChange={handleChange}
          />
          <Input
            label={"Password"}
            id={"Password"}
            name="password"
            value={form.password}
            type={"password"}
            onChange={handleChange}
          />
          <button type="submit">Register Now</button>
       </form>
        
    </div>
  )
}

export default Register