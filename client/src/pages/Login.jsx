import { useState } from "react"
import Input from "../components/Input"
import { useAuth } from "../context/auth"
import { toast } from 'react-toastify';


const Login = () => {
  
  const { storetoken,url, closeAuthModal,openRegister }= useAuth()
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
        closeAuthModal()
      }else{
        const resData =  await response.json()
        toast.error( resData.extraDetails ? resData.extraDetails : resData.message)
        }
      }catch(err){
        console.error('Error during login:', err)
      }
  }
  return (
   <>
 <div className="relative w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

    {/* Close Button */}
    <button
     onClick={closeAuthModal}
     className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 
      text-2xl font-bold transition"
    >
       ✕
   </button>

    {/* Heading */}
    <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
      Login
    </h2>

    {/* Form */}
    <form className="space-y-6" onSubmit={handleSubmit}>
      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          value={user.email}
          onChange={handleChange}
        />
      </div>

      {/* Password */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Password
        </label>
        <Input
          id="password"
          name="password"
          type="password"
          value={user.password}
          onChange={handleChange}
        />
      </div>

      {/* Button */}
      <button
        type="submit"
        className="mt-6 w-full py-2 rounded-lg bg-indigo-600 text-white 
        font-semibold hover:bg-indigo-700 transition shadow-md"
      >
        Login
      </button>
    </form>

    {/* Footer */}
    <p className="text-center text-sm text-gray-500 mt-6">
      Don’t have an account?
      <button
        onClick={() => (
          closeAuthModal(),
          openRegister()
        )}
        className="text-indigo-600 font-medium hover:underline ml-1"
      >
        Register
      </button>
    </p>

  </div>


   </>
  )
}
 
export default Login