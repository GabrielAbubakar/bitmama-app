// import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {

    const [user, setUser] = useState('')

    function changeUser(e) {
        setUser(e.target.value)
    }

    function formSubmit(e) {
        e.preventDefault()

        localStorage.setItem('user', user);

        window.location = `${window.location}dashboard`
    }


    return (
        <div className="loginPage">
            <form onSubmit={formSubmit}>
                <h1>Welcome. Please input your username</h1>

                <input type="text" placeholder="Username" value={user} onChange={changeUser} />
                <input type="submit" value="Log In" />
            </form>
        </div>
    );
}

export default Login;