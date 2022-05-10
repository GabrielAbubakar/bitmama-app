import { useState, useEffect, useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const Login = () => {

    const { login, setLogin } = useContext(UserContext)

    const [user, setUser] = useState({ name: "", isActive: true })

    const [users, setUsers] = useState(localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : []);

    // const [users, setUsers] = useState([])



    function formSubmit(e) {
        e.preventDefault()
        // setUsers([...users, user])
        console.log(login);
        // window.location = `${window.location}dashboard`
    }

    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users));
    }, [users])


    return (
        <div className="loginPage">
            <form onSubmit={formSubmit}>
                <h1>Welcome. Please input your username</h1>

                <input type="text"
                    placeholder="Username"
                    value={login}
                    onChange={(e) => setLogin(e.target.value)} />

                <input type="submit" value="Log In" />
            </form>
        </div>
    );
}

export default Login;