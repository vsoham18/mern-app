import { useEffect, useState } from "react"

import { useNavigate, useParams } from "react-router-dom"
import { useAuth } from "../../context/auth"
import { toast } from "react-toastify"
import Input from "../../components/Input"
export const EditAdminUsers = () => {

    const {token, url} = useAuth()
    const { Id } = useParams()
    const navigate = useNavigate()

    const [form, setForm] = useState({
    userName: '',
    email: '',
    phone: ''
   })

   useEffect(()=>{
    fetchUserDetails()
   },[Id])

//  <--- to fetch the data by user id and populate the form --->
  const fetchUserDetails = async()=>{
    try{
      const response = await fetch(`${url}/api/admin/users/${Id}`,{
        method: 'GET',
        headers:{
          'Content-Type': 'application/json',
          'authorization': `Bearer ${token}`
        }
      })
      const data = await response.json()
      setForm({
        userName: data.user.userName,
        email: data.user.email,
        phone: data.user.phone
      })
    }catch(error){
      console.log("error while fetching user details", error)
    }
  }

   const handleChange = (e)=>{
         const { name, value } = e.target
         setForm((prev)=>({ ...prev, [name]: value }))
    }
    
    // <--- to submit the edited user details --->
    const handleSubmit = async(e) =>{
          console.log(form);
        try{
        e.preventDefault()
       const response = await fetch(`http://localhost:5000/api/admin/users/edit/${Id}`,{
        method: 'PATCH',
        headers:{
          'Content-Type': 'application/json',
          'authorization': `Bearer ${token}`
        },
        body: JSON.stringify(form)
      })
      
      if(response.ok){
        toast.success("User updated successfully")
        navigate('/admin/users')
      }else{
        const resData = await response.json()
        toast.error(resData.extraDetails ? resData.extraDetails : resData.message)
      }
         
    }catch(error){
      console.error("error while editing user", error)
      }
    }
  return (
    <>
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-6 sm:p-8">

  {/* Heading */}
  <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
    Edit User
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

    {/* Action Buttons */}
    <div className="flex flex-col sm:flex-row gap-4 pt-4">
      <button
        type="submit"
        className="w-full sm:w-auto px-6 py-2.5 rounded-lg 
        bg-indigo-600 text-white font-semibold 
        hover:bg-indigo-700 transition shadow-md"
      >
        Update User
      </button>

      <button
        type="button"
        onClick={() => window.history.back()}
        className="w-full sm:w-auto px-6 py-2.5 rounded-lg 
        border border-gray-300 text-gray-700 
        hover:bg-gray-100 transition"
      >
        Cancel
      </button>
    </div>

  </form>
</div>

    </>
  )
}
