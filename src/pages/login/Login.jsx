import React from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  return (
    <div className="container">
        <div className="loginForm">
            <form action="">
                <h4>Login</h4>
                <label htmlFor="pseudo">Username*</label>
                <input type="text" className='textInput' name='pseudo' placeholder='Username...' required />

                <label htmlFor="password">PassWord*</label>
                <input type="password" className='textInput' name='password' placeholder='Password...' required />
                <input type="submit" value="Login" className='button' />
            </form>

            <Link to="/register">Register</Link>
        </div>
    </div>
  )
}

export default Login;
