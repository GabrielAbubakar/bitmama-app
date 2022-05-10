import { useEffect, useState, useContext } from "react";
import { UserContext } from "../contexts/UserContext";


const LoggedIn = () => {

    const { login, setLogin } = useContext(UserContext)

    return (
        <div className="loggedInPage">
            {
                login ? <h1>Welcome {login}</h1> : <h1>Loading...</h1>
            }

            <button>Log Out</button>
            <button>Sign In with a different username</button>
        </div>
    );
}

export default LoggedIn;