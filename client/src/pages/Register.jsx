import { useState } from "react"
import Input from "../components/Input.jsx"
const Register = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    phone: '',
    password: ''
  })
  const handleChange = (e)=>{
       const { name, value } = e.target
       setForm(prev => ({ ...prev, [name]: value }))
  }
  const handleSubmit = (e) =>{
      e.preventDefault()
      console.log(form);
      setForm({ username: '', email: '', phone: '', password: '' })

  }
  return (
    <div>
       <form className="register-form" onSubmit={handleSubmit}>

          <Input
            label={"Username"}
            id={"username"}
            name="username"
            value={form.username}
            onChange={handleChange}
          />
          <Input
            label={"Email"}
            id={"email"}
            name="email"
            value={form.email}
            onChange={handleChange}
          />
          <Input
            label={"Phone"}
            id={"phone"}
            name="phone"
            value={form.phone}
            onChange={handleChange}
          />
          <Input
            label={"Password"}
            id={"password"}
            name="password"
            value={form.password}
            onChange={handleChange}
          />
          <button type="submit">Register Now</button>
       </form>
        
    </div>
  )
}

export default Register