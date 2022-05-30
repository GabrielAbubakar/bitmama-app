import React, { createContext, useState } from 'react'

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState('')

    const [users, setUsers] = useState([])

    const addUser = (user) => {
        setUsers([...users, user])
    }



    return (
        <UserContext.Provider value={{ users, setUsers, currentUser, setCurrentUser, addUser }}>
            {children}
        </UserContext.Provider>
    )
}


export default UserContextProvider;