import { useState, useEffect } from "react";

const Login = () => {

    const [user, setUser] = useState({ name: "", isActive: true })

    const [users, setUsers] = useState(localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : []);

    // const [users, setUsers] = useState([])



    function formSubmit(e) {
        e.preventDefault()
        setUsers([...users, user])
        window.location = `${window.location}dashboard`
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
                    value={user.name}
                    onChange={(e) => setUser({ name: e.target.value, isActive: true })} />

                <input type="submit" value="Log In" />
                <p>{user.name}</p>
            </form>
        </div>
    );
}

export default Login;