import { useState, useEffect, useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const Login = () => {

    const { login, setLogin } = useContext(UserContext)

    const [user, setUser] = useState('')


    function formSubmit(e) {
        e.preventDefault()
        setLogin(user)
        // window.location = `${window.location}dashboard`
    }



    return (
        // <div className="loginPage">
        //     <form onSubmit={formSubmit}>
        //         <h1>Welcome. Please input your username</h1>

        //         <input type="text"
        //             placeholder="Username"
        //             value={login}
        //             onChange={(e) => setLogin(e.target.value)} />

        //         <input type="submit" value="Log In" />
        //     </form>

        // </div>
        <div>
            {
                login ? (
                    <div>
                        <h1>Welcome {login}</h1>
                    </div>
                ) : (
                    <form onSubmit={formSubmit}>
                        <h1>Welcome. Please input your username</h1>

                        <input type="text"
                            placeholder="Username"
                            value={user}
                            onChange={(e) => setUser(e.target.value)} />

                        <input type="submit" value="Log In" />
                    </form>
                )
            }
        </div>
    );
}

export default Login;