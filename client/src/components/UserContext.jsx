import { createContext, useState } from 'react'

export const UserContext = createContext();

export const UserProvider = (props) => {

    const [ email, setEmail ] = useState('');
    const [ loggedIn, setLoggedIn ] = useState(false);
    const [ username, setUsername ] = useState('');

  return (
    <UserContext.Provider value={{
            email, 
            setEmail, 
            loggedIn, 
            setLoggedIn,
            username,
            setUsername
        }}>
            {props.children}
    </UserContext.Provider>
  )
}