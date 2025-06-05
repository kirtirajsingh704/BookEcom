import './login.css';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [output, setOutput] = useState('');

  const handleSubmit = () => {
    const userDetail = { email, password };

    axios.post("http://localhost:5001/user/login", userDetail).then((response) => {
      const users = response.data.userList;
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("_id", users._id);
      localStorage.setItem("name", users.name);
      localStorage.setItem("email", users.email);
      localStorage.setItem("password", users.password);
      localStorage.setItem("mobile", users.mobile);
      localStorage.setItem("address", users.address);
      localStorage.setItem("city", users.city);
      localStorage.setItem("gender", users.gender);
      localStorage.setItem("role", users.role);
      localStorage.setItem("status", users.status);
      localStorage.setItem("info", users.info);
      

      (users.role === "admin") ? navigate("/ManageUser") : navigate("/products");
      
    }).catch((error) => {
      setOutput("Invalid credentials or verify your account");
      toast.error("Invalid credentials or verify your account")
    });
  }

  return (
    <section className="login-section" style={{display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",

      backgroundImage: "url('./assets/images/loginBackk.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'saturation',
  }}>
      <div className="login-container" style={{
        padding: '30px',
        backdropFilter:'blur(1px)',
        backgroundColor:'color-mix(in srgb,white,transparent 40%)',
        borderRadius: '10px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.8)',
        width: '500px',}}>
        <h1 >Login Here</h1>
        <div className="output-message" style={{ color: "blue" }}>{output}</div>
        <form>
          <div className="form-group" style={{marginBottom: '15px',}}>
            <label style={{ fontWeight: 'bold',
        display: 'block',}} htmlFor="email">Email:</label>
            <input
              type="email"
              className="form-control"  
              style={{
                 formControlFocus: {
                  borderColor: '#007bff',
                  boxShadow: '0 0 5px rgba(0, 123, 255, .5)',
              },
                width: '100%',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc',}}
              placeholder="Enter Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label style={{ fontWeight: 'bold',
        display: 'block',}}  htmlFor="password">Password:</label>
            <input
              type="password"
              className="form-control" 
              style={{
                formControlFocus: {
                  borderColor: '#007bff',
                  boxShadow: '0 0 5px rgba(0, 123, 255, .5)',
              },
                width: '100%',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc',}}
              placeholder="Enter Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>
          <button 
          style={{
            btnHover: {
              backgroundColor: '#0056b3',
          },
            width: '100%',
            padding: '10px',
            borderRadius: '5px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            cursor: 'pointer',}}
          type="button" className="btn btn-primary" onClick={handleSubmit}>Login</button>
        </form>
        <p className="register-link">
          Don't have an account? <a href="/register">Register here</a>
        </p>
      </div>
    </section>
  );
}

export default Login;
