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

// class UserContextProvider extends Component {
//     state = {
//         login: ''
//     }

//     render() {
//         return (
//             <UserContext.Provider value={this.state.login}>
//                 {this.props.children}
//             </UserContext.Provider>
//         )
//     }
// }

export default UserContextProvider