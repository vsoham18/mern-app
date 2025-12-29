import { useEffect, useState } from "react"
import { useAuth } from "../../context/auth"
import { Link } from "react-router"

export const AdminUsers = () => {
  const [users, setUsers] = useState([])
  const {token, url} = useAuth()

  // #fetch all users
  const getAllUsers = async()=>{
    try{
       const response = await fetch(`${url}/api/admin/users`,{
        method: 'GET',
        headers:{
          'Content-Type': 'application/json',
          'authorization': `Bearer ${token}`
        }
       })
       const data = await response.json()
        setUsers(data.users)
       console.log(data.users)
    }catch(error){
      console.log("error while fetching users", error)
    }
  }
  
  useEffect(()=>{
    getAllUsers()
  },[])

  // #delete user
  const deleteUser = async(userId) => {
    try{
      const response = await fetch(`${url}/api/admin/users/delete/${userId}`,{
        method: 'DELETE',
        headers:{
          'Content-Type': 'application/json',
          'authorization': `Bearer ${token}`
        }
      })
      if(response.ok){
        getAllUsers() 
      }
    }catch(error){
      console.log("error while deleting user", error)
    }
  }
  
  return (
    <>
    <div>Admin-users</div>
     
<table>
    <thead>
       <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Update</th>
            <th>Delete</th>
       </tr>
    </thead>

      <tbody>
  { users.map((user)=>(
    <tr key={user._id}>
        <td>{user.userName}</td>
        <td>{user.email}</td>
        <td>{user.phone}</td> 
        <td><Link to={`/admin/users/edit/${user._id}`} className="update-btn">edit</Link></td>
        <td><button className="delete-btn" onClick={() => deleteUser(user._id)}>Delete</button></td>
    </tr>
   ))
  }
     </tbody>
</table>
    </>
  )
} 
