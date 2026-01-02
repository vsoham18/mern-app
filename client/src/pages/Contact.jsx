import { useState } from "react"
import Input from "../components/Input"
import { useAuth } from "../context/auth"
   
const Contact = () => {
  
   const { user, url } = useAuth()
 
  const [form, setform] = useState({
    username: '',
    email: '',
    message: ''
  })

  const [isuser,setisuser] = useState(true)

    if(isuser && user){
      setform({
    username: user.userName,
    email: user.email,
    })
    setisuser(false)
  }
  
  const handleChange = (e)=>{
       const { name, value } = e.target
       setform(prev => ({ ...prev, [name]: value }))
  }
  
  const handleSubmit = async(e) =>{
      e.preventDefault()
      try{
        const response = await fetch(`${url}/contact`,{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        })
      
        if(response.ok){
          alert('Message sent successfully')
          setform((prev)=>({...prev, message: ''}))
        }else{
          alert('Failed to send message. Please try again.')
        }
      }catch(err){
        console.error('Error during sending message:', err)
      }
  }
  return (
   <div className="max-w-3xl mx-auto px-4 py-10">
  
  {/* Heading */}
  <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">
    Contact Us
  </h3>

  {/* Card */}
  <div className="bg-white rounded-xl shadow-lg p-8">
    <form className="space-y-5" onSubmit={handleSubmit}>

      <div>
        <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
          Username
        </label>
        <Input
          id="username"
          name="username"
          type="text"
          value={form.username}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Email
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          value={form.message}
          onChange={handleChange}
          placeholder="Write your message here..."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900
          focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full py-2.5 rounded-lg bg-indigo-600 text-white font-semibold
        hover:bg-indigo-700 transition duration-300 shadow-md"
      >
        Submit
      </button>

    </form>
  </div>

</div>

  )
}

export default Contact