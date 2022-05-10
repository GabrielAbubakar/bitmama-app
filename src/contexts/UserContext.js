import React, { createContext, useState } from 'react'

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {

    const [login, setLogin] = useState('')

    return (
        <UserContext.Provider value={{ login, setLogin }}>
            {children}
        </UserContext.Provider>
    )
}


export default UserContextProvider