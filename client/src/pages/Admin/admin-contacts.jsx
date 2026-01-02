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
    
   <div className="bg-white rounded-xl shadow-md p-6">

  {/* Header */}
  <h2 className="text-2xl font-bold text-gray-800 mb-6">
    Contact Messages
  </h2>

  {/* Contacts List */}
  <div className="space-y-4">
    {data.map((contact) => (
      <div
        key={contact._id}
        className="flex flex-col md:flex-row md:items-center md:justify-between 
        border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition"
      >
        {/* Contact Info */}
        <div className="space-y-1">
          <p className="font-semibold text-gray-800">
            {contact.name}
          </p>
          <p className="text-sm text-gray-600">
            {contact.email}
          </p>
          <p className="text-gray-700">
            {contact.message}
          </p>
        </div>

        {/* Action */}
        <div className="mt-3 md:mt-0">
          <button
            onClick={() => deleteContact(contact._id)}
            className="px-4 py-2 rounded-lg bg-red-600 text-white 
            hover:bg-red-700 transition font-medium"
          >
            Delete
          </button>
        </div>
      </div>
    ))}
  </div>

</div>

       
    </>
  )
}
