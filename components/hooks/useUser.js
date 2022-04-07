import {useState} from 'react'

const useUser = () => {
    const [user, setUser] = useState({})
    
    console.log(user)

  return {
      user, setUser
  }
}

export default useUser