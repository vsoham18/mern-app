import { useEffect, useState } from 'react'
import { useAuth } from '../context/auth.jsx'

const Service = () => {

  const {isloggedin, url, openLogin} = useAuth()
  const [data, setdata] = useState([])
  const [loading, setLoading] = useState(true);

  
 const fetchServices = async() =>{
     try{
      const response = await fetch(`${url}/service`,{
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
      setLoading(false);
    }catch(err){
      console.error('Error fetching services:', err)
     }
  }
  
 useEffect(()=>{
   if (!isloggedin) {
      setLoading(false);
      return ;
    }
   fetchServices()
  },[ isloggedin])
     
   if (!isloggedin) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="bg-white shadow-lg rounded-xl p-8 max-w-md text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            Please Login
          </h2>
          <p className="text-gray-600 mb-6">
            You need to be logged in to view our courses and services.
            Login to explore all available learning resources.
          </p>

          <button
           onClick={openLogin}
            className="inline-block px-6 py-2 rounded-lg bg-indigo-600 
            text-white font-medium hover:bg-indigo-700 transition"
          >
            Login Now
          </button>
        </div>
      </div>
    )
  }
  
   if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        Loading services...
      </div>
    );
  }
 
  return (
   <div className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Our Courses
        </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {data.map((service) => (
      <div
        key={service._id}
        className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-6 flex flex-col"
      >
        <h4 className="text-xl font-semibold text-gray-800 mb-2">
          {service.service}
        </h4>

        <p className="text-gray-600 grow mb-4">
          {service.description}
        </p>

        <div className="mt-auto">
          <span className="block text-indigo-600 font-semibold mb-1">
            Price: {service.price}
          </span>

          <p className="text-sm text-gray-500">
            {service.provider}
          </p>
        </div>

        <button className="mt-5 w-full py-2 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition">
          Enroll Now
        </button>
      </div>
    ))}
  </div>
</div>

  )
}

export default Service