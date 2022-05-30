import { useState, useEffect, useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const Login = () => {


    // const [input, setInput] = useState('')

    const { users, currentUser, setCurrentUser, addUser } = useContext(UserContext)




    function formSubmit(e) {
        e.preventDefault()
        // setCurrentUser(input)

        addUser(currentUser)
        // window.location = `${window.location}dashboard`
    }

    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users))
        localStorage.setItem('currentUser', currentUser)
    }, [users])



    return (
        <div>
            <form onSubmit={formSubmit}>
                <h1>Welcome. Please input your username</h1>

                <input type="text"
                    placeholder="Username"
                    value={currentUser}
                    onChange={(e) => setCurrentUser(e.target.value)} />

                <input type="submit" value="Log In" />
            </form>

            {
                currentUser && users && (
                    <div>
                        <h1>Welcome {currentUser}</h1>

                        <h3>Current Users</h3>
                        {
                            users.map(user => {
                                return <li>{user}</li>
                            })
                        }
                    </div>
                )
            }
        </div>


    );
}

export default Login;