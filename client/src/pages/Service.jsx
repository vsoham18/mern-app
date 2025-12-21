import { useEffect, useState } from 'react'
import { useAuth } from '../context/auth.jsx'
import { useNavigate } from 'react-router'

const Service = () => {

  const navigate = useNavigate()
  const {isloggedin} = useAuth()
  const [data, setdata] = useState([])
  
     useEffect(()=>{
        const fetchServices = async() =>{
     try{
        if(!isloggedin){
        navigate('/login')
        return
      }
      const response = await fetch('http://localhost:5000/service',{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })

      if(!response.ok){
        throw new Error('Failed to fetch services')
      }

      const resData = await response.json()
      setdata(resData)
      console.log(data)

    }catch(err){
      console.error('Error fetching services:', err)
     }
     }
   fetchServices()
  },[setdata, isloggedin])
      
  return (
    <div className='service'>
 {        data.map((service)=>(
          <div key={service._id} className='service-card'>
            <h4>{service.service}</h4>
            <p>{service.description}</p>
            <span>Price: ${service.price}</span>
             <p>{service.provider}</p>
          </div>
        ))
 }
    </div>
  )
}

export default Service