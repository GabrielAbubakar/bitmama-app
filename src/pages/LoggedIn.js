// import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const LoggedIn = () => {



    const [users, setUsers] = useState(localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : []);

    const [user, setUser] = useState(users[0])

    function handleLogOut() {
        localStorage.removeItem('user', user)
    }

    // useEffect(() => {
    //     setUser(localStorage.getItem('user'))
    // }, [])

    return (
        <div className="loggedInPage">
            {/* {
                user ? <h1>Welcome {user}</h1> : <h1>Loading...</h1>
            } */}
            <h1>Welcome {user.name}</h1>

            <button onClick={handleLogOut}>Log Out</button>
            <button>Sign In with a different username</button>
        </div>
    );
}

export default LoggedIn;