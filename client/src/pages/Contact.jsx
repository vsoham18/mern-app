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
    <div>
      <h3>Contact us</h3>
       <form className="contact-form" onSubmit={handleSubmit}>
            <Input
            label={"Username"}
            id={"username"}
            name="username"
            value={form.username}
            onChange={handleChange}
            type={"text"}
          />
        
         <Input
            label={"Email"}
            id={"email"}
            name="email"
            value={form.email}
            onChange={handleChange}
            type={"email"}
          />
           <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" value={form.message} onChange={handleChange}></textarea>
          <button type="submit" className="btn">Submit</button>
       </form>
          
    </div>
  )
}

export default Contact