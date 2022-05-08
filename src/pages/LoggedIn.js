import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const LoggedIn = () => {

    const [user, setUser] = useState('')

    function handleLogOut() {

    }

    useEffect(() => {
        setUser(localStorage.getItem('user'))
    }, [])

    return (
        <div className="loggedInPage">
            {
                user ? <h1>Welcome {user}</h1> : <h1>Loading...</h1>
            }

            <button onClick={handleLogOut}>Log Out</button>
            <button>Sign In with a different username</button>
        </div>
    );
}

export default LoggedIn;