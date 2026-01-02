import { useState } from "react"
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

  const { url,openLogin, closeAuthModal } = useAuth()

  const handleChange = (e)=>{
       const { name, value } = e.target
       setForm(prev => ({ ...prev, [name]: value }))
  }
  const handleSubmit = async(e) =>{
    e.preventDefault()
      try{
         const response = await fetch(`${url}/api/auth/register`,{
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
        closeAuthModal()
      }else{
        const resData = await response.json()
        toast.error(resData.extraDetails ? resData.extraDetails : resData.message)
      }
      }catch(err){
        console.error('Error during registration:', err)
      }    
  }
  return (
    
<div className="relative w-full max-w-lg bg-white rounded-2xl shadow-xl p-8">
        
         <button
         onClick={ closeAuthModal }
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 
          text-2xl font-bold transition"
        >
          ✕
        </button>

    {/* Heading */}
    <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
      Create Account
    </h2>

    {/* Form */}
    <form className="space-y-5" onSubmit={handleSubmit}>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Username
        </label>
        <Input
          name="userName"
          value={form.userName}
          onChange={handleChange}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Email
        </label>
        <Input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Phone
        </label>
        <Input
          name="phone"
          value={form.phone}
          onChange={handleChange}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Password
        </label>
        <Input
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
        />
      </div>

      {/* Button */}
      <button
        type="submit"
        className="w-full mt-2 py-2.5 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition duration-300 shadow-md"
      >
        Register Now
      </button>

    </form>

    {/* Footer */}
    <p className="text-center text-sm text-gray-500 mt-6">
      Already have an account?
      <button onClick={() => (
        closeAuthModal(),
        openLogin()
      )} className="text-indigo-600 cursor-pointer font-medium hover:underline ml-1">
        Login
      </button>
    </p>

  </div>


  )
}

export default Register