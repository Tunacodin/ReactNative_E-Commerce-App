import React from 'react'
import Input from '../../../components/Input/Input'
import { createContext } from 'react'

const LoginContext = createContext();



const LoginProvider = ({ children,router }) => {
  
  

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  //... other state variables


  return (

    <LoginContext.Provider>
      {children}
    </LoginContext.Provider>

  )
}

export default LoginContext
