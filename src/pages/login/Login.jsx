import axios from 'axios';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Login.scss';

const Login = () => {
    const [pseudo, setPseudo] = useState("");
    const [password, setPassword] = useState("");

    const loginSubmit = async (e) => {
        e.preventdefault();
        try {
            const res = await axios.post("http://localhost:3001/login", {
                pseudo,
                password,
            });
            console.log(res.data);
        } catch (err) {
            console.err(err)
        }
    }

  return (
    <div className="container">
        <div className="loginForm">
            <form onSubmit={loginSubmit}>
                <h4>Login</h4>
                <label htmlFor="pseudo">Username*</label>
                <input type="text" className='textInput' name='pseudo' value={pseudo} placeholder='Username...' onChange={(e) => setPseudo(e.target.value)} required />

                <label htmlFor="password">PassWord*</label>
                <input type="password" className='textInput' name='password' value={password} placeholder='Password...' onChange={(e) => setPassword(e.target.value)} required />
                <input type="submit" value="Login" className='button' />
            </form>
            <br />
            <NavLink to="/register">Register</NavLink>
        </div>
    </div>
  )
}

export default Login;
