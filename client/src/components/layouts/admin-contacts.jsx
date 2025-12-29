import { useEffect, useState } from "react"
import { useAuth } from "../../context/auth"

export const AdminContacts = () => {
    const [data, setData] = useState([])
    const {token, url} = useAuth()

     useEffect(()=>{
      fetchContacts()
     },[])

    const fetchContacts = async() => {
      try{
        const response = await fetch(`${url}/api/admin/contacts`,{
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        })
        const result = await response.json()
        setData(result.contacts)
      }catch(err){
        console.log(err)
      }
    }

    const deleteContact = async(id) => {
      try{
        const response = await fetch(`${url}/api/admin/contacts/${id}`,{
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        })
        if(response.ok){
          fetchContacts()
        }
        const data = await response.json()
         
      }catch(err){
      console.log(err)
    }
    }
  return (
    <>
    <div>
    <div>Admin-contacts</div>
       {
        data.map((contact) => (
      <div className="contact-details" key={contact._id}>
        <p>{contact.name}</p>
        <p>{contact.email}</p>
        <p>{contact.message}</p>
        <button onClick={()=>{deleteContact(contact._id)}}>Delete</button>
      </div>
        ))
       }
    </div>
       
    </>
  )
}
