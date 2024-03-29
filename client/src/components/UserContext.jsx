import { createContext, useState } from 'react'

export const UserContext = createContext();

export const UserProvider = (props) => {

    const [ email, setEmail ] = useState('');
    const [ loggedIn, setLoggedIn ] = useState(false);
    const [ username, setUsername ] = useState('');
    const [ userId, setUserId ] = useState('');
    const [ collections, setCollections ] = useState([]);
    const [ navShow, setNavShow ] = useState(true);

  return (
    <UserContext.Provider value={{
            email, 
            setEmail, 
            loggedIn, 
            setLoggedIn,
            username,
            setUsername,
            userId,
            setUserId,
            collections,
            setCollections,
            navShow,
            setNavShow
        }}>
            {props.children}
    </UserContext.Provider>
  )
}
