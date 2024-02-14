import { useState } from "react";
import './Registration.css';
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Adminre() {
    const [isSignUpActive, setIsSignUpActive] = useState(true);

    const handleToggle = () => {
        setIsSignUpActive((prevIsSignUpActive) => !prevIsSignUpActive);
    };
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [signupName, setSignupName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const [passwordRequirements, setPasswordRequirements] = useState({
    length: false,
    number: false,
    lowercase: false,
    specialSymbol: false,
    uppercase: false,
  });
  const navigate = useNavigate();

//   const switchForm = (form) => {
//     setActiveForm(form);
//   };

  const handleLogin = async (e) => {
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
        navigate('/Adminre');
      }
    } catch (error) {
      console.error('Login failed:', error);
      alert('Login failed. Please check your credentials and try again.');
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (signupPassword !== confirmPassword) {
      setPasswordMatchError(true);
      return;
    } else {
      setPasswordMatchError(false);
    }

    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/register', {
        name: signupName,
        email: signupEmail,
        password: signupPassword,
        confirmPassword: confirmPassword // Add confirmPassword field
      });

      console.log(response.data); // Handle the response data appropriately
      navigate('/Adminre');
      window.location.reload(); // Reload the page after successful sign-up
    } catch (error) {
      console.error('Signup failed:', error);
      alert('Signup failed. Please try again later.');
    }
  };

  const updatePasswordRequirements = (password) => {
    const requirements = {
      length: password.length >= 8 && password.length <= 16,
      number: /[0-9]/.test(password),
      lowercase: /[a-z]/.test(password),
      specialSymbol: /[@$!%*?&]/.test(password),
      uppercase: /[A-Z]/.test(password),
    };
    setPasswordRequirements(requirements);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setSignupPassword(newPassword);
    updatePasswordRequirements(newPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    const confirmPasswordValue = e.target.value;
    setConfirmPassword(confirmPasswordValue);
    if (signupPassword === confirmPasswordValue) {
      setPasswordMatchError(false);
    } else {
      setPasswordMatchError(true);
    }
  };


    return (
        <>
            <div>
                <div className={`container ${isSignUpActive ? 'active' : ''}`} id="container">
                    <div className="form-container sign-up">
                        <form onSubmit={handleSignup}>
                          
                            <h1>Create Account</h1>
                            <input type="text" placeholder="Name"  value={signupName}
                    onChange={(e) => setSignupName(e.target.value)} />
                            <input type="email" placeholder="Email"  value={signupEmail}
                    onChange={(e) => setSignupEmail(e.target.value)}/>
                            <input type="password" placeholder="Password"    value={signupPassword}
                    onChange={handlePasswordChange}/>
                            <input type="password" placeholder="Confirmpassword"  value={confirmPassword}
                    onChange={handleConfirmPasswordChange} />
                            <button >Sign Up</button>
                        </form>
                    </div>
                    <div className="form-container sign-in">
                        <form onSubmit={handleLogin}>
                            <h1>Sign In</h1>
                           
                            
                            <input type="email" placeholder="Email" value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}/>
                            <input type="password" placeholder="Password" value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}/>
                
                        <button type="submit" >Sign In</button>
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
                                <button onClick={handleToggle} className="hidden" id="register">Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Adminre;