import './Register.css';
import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [gender, setGender] = useState("");
  const [output, setOutput] = useState("");

  const handleSubmit = () => {
    if (city === "select city" || gender === "") {
      toast.error("Please select both city and gender.");
     
      return;
    }

    const userDetail = {
      name: name.trim(),
      email: email.trim(),
      password:password,
      mobile: mobile.trim(),
      address: address.trim(),
      city:city,
      gender:gender
    };

    axios.post("http://localhost:5001/user/save", userDetail)
      .then(() => {
        toast.success("User registered successfully!");
        setOutput("user register successfully");
        setName(""); setEmail(""); setPassword("");
        setMobile(""); setCity(""); setAddress(""); setGender("");
      })
      .catch((error) => {
        console.error("Registration error:", error);
        toast.error("Registration failed. Please try again.");
      });
  };

  return (
    <section className="register-section" style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "95%",
    }}>
      <div className="register-container" style={{
        backgroundImage: "url('/assets/images/loginBack.JPG')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'saturation',
        padding: '30px',
        borderRadius: '10px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
        width: '500px'
      }}>
        <h1>Register Here</h1>
        <div style={{ color: "blue" }}>{output}</div>
        <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
          <div className="form-group" style={{ marginBottom: '15px' }}>
            <label style={{ fontWeight: 'bold', display: 'block' }}>Name:</label>
            <input type="text" className="form-control" placeholder="Enter Name" value={name} onChange={e => setName(e.target.value)} style={inputStyle} />
          </div>

          <div className="form-group" style={{ marginBottom: '15px' }}>
            <label style={{ fontWeight: 'bold', display: 'block' }}>Email:</label>
            <input type="email" className="form-control" placeholder="Enter Email" value={email} onChange={e => setEmail(e.target.value)} style={inputStyle} />
          </div>

          <div className="form-group" style={{ marginBottom: '15px' }}>
            <label style={{ fontWeight: 'bold', display: 'block' }}>Password:</label>
            <input type="password" className="form-control" placeholder="Enter Password" value={password}  minLength="5" onChange={e => setPassword(e.target.value)} style={inputStyle} />
          </div>

          <div className="form-group" style={{ marginBottom: '15px' }}>
            <label style={{ fontWeight: 'bold', display: 'block' }}>Mobile:</label>
            <input type="text" className="form-control" placeholder="Enter Mobile" value={mobile} pattern="[0-9]{10}"
      title="Enter a 10-digit mobile number"
      required onChange={e => setMobile(e.target.value)} style={inputStyle} />
          </div>

          <div className="form-group" style={{ marginBottom: '15px' }}>
            <label style={{ fontWeight: 'bold', display: 'block' }}>Address:</label>
            <textarea rows="3" className="form-control" placeholder="Enter Address" value={address} onChange={e => setAddress(e.target.value)} style={inputStyle}></textarea>
          </div>

          <div className="form-group" style={{ marginBottom: '15px' }}>
            <label style={{ fontWeight: 'bold', display: 'block' }}>City:</label>
            <select className="form-control" value={city} onChange={e => setCity(e.target.value)} style={inputStyle}>
              <option>select city</option>
              <option>Indore</option>
              <option>Bhopal</option>
              <option>Dewas</option>
              <option>Ujjain</option>
            </select>
          </div>

          <div className="form-group" style={{ marginBottom: '20px' }}>
            <label style={{ fontWeight: 'bold', display: 'block' }}>Gender:</label>
            <label>
              <input type="radio" name="gender" value="male" checked={gender === "male"} onChange={e => setGender(e.target.value)} />
              &nbsp;Male
            </label>
            &nbsp;&nbsp;&nbsp;
            <label>
              <input type="radio" name="gender" value="female" checked={gender === "female"} onChange={e => setGender(e.target.value)} />
              &nbsp;Female
            </label>
          </div>

          <button type="submit" className="btn btn-primary" style={buttonStyle}>Register</button>
        </form>

        <p className="login-link" style={{ marginTop: '15px',color:'white' }}>
          Already have an account? <a href="/login">Login here</a>
        </p>
      </div>
    </section>
  );
}

const inputStyle = {
  width: '100%',
  padding: '5px',
  borderRadius: '5px',
  border: '1px solid #ccc',
};

const buttonStyle = {
  width: '100%',
  padding: '10px',
  borderRadius: '5px',
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  cursor: 'pointer',
};

export default Register;
