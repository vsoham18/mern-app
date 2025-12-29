import { useEffect, useState } from "react"
import Input from "../Input"
import { useNavigate, useParams } from "react-router-dom"
import { useAuth } from "../../context/auth"
import { toast } from "react-toastify"
export const EditAdminUsers = () => {

    const {token} = useAuth()
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
      const response = await fetch(`http://localhost:5000/api/admin/users/${Id}`,{
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
    <div>Edit Users</div>
      <form className="edit-user-form" onSubmit={handleSubmit}>
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
            <button type="submit">Update</button>
      </form>
    </>
  )
}
