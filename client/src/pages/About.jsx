import { useAuth } from "../context/auth"
const About = () => {
  const { user } = useAuth()
  return (
    <div>
       <h2>hello {user.username}</h2>
    </div>
  )
}

export default About