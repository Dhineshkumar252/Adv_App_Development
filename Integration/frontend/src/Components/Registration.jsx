import { useState } from "react";
import './Registration.css';
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Registration() {
    const [isSignUpActive, setIsSignUpActive] = useState(true);

    const handleToggle = () => {
        setIsSignUpActive((prevIsSignUpActive) => !prevIsSignUpActive);
    };
    const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const navigate = useNavigate();
  const handleLLogin = async (e) => {
    e.preventDefault();
    if (!loginEmail || !loginPassword) {
      alert('Please enter both email and password.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/login', {
        email: loginEmail,
        password: loginPassword
      });

      console.log(response.data); // Handle the response data appropriately
      const token = response.data.token; // Extract the token from the response
      console.log('Token:', token); // Log the token to the console
      localStorage.setItem('token', token);

      // Keep existing redirection logic
      if (loginEmail === 'admin@gmail.com' && loginPassword === 'Admin@123') {
        navigate('/AdminH');
      } else if (response.data.role === 'ADMIN') { 
        navigate('/AdminH');
      } else {
        console.error()
      }
    } catch (error) {
      console.error('Login failed:', error);
      alert('Login failed. Please check your credentials and try again.');
    }
  };


    return (
        <>
            <div>
                <div className={`container ${isSignUpActive ? 'active' : ''}`} id="container">
                
                    <div className="form-container sign-in">
                        <form onSubmit={handleLLogin}>
                            <h1>Sign In</h1>
                            <input type="email" placeholder="Email" value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}/>
                            <input type="password" placeholder="Password" value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}/>
                        <button className="abc">Sign In</button>
                        </form>
                    </div>
                    <div className="toggle-container">
                        <div className={`toggle ${isSignUpActive ? 'right-panel-active' : ''}`}>
                            <div className="toggle-panel toggle-left">
                                <h1>Welcome Back!</h1>
                                <p>Enter your login details</p>
                                <button onClick={handleToggle} className="hidden" id="login">Sign In</button>
                            </div>
                            <div className="toggle-panel toggle-right">
                                <h1>Hello, Friend!</h1>
                                <p>Register with your personal details</p>
                                <button onClick={handleToggle} className="hidden" id="register">Sign In</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Registration;