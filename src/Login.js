// import React, { useState } from 'react';
// import './Login.css';

// const Login = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         // Handle login logic here
//         console.log('Username:', username);
//         console.log('Password:', password);
//     };

//     return (
//         <div className="login-container">
//             <h2>Login</h2>
//             <form onSubmit={handleSubmit}>
//                 <input 
//                     type="text" 
//                     placeholder="Username" 
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)} 
//                     required 
//                 />
//                 <input 
//                     type="password" 
//                     placeholder="Password" 
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)} 
//                     required 
//                 />
//                 <button type="submit">Login</button>
//             </form>
//         </div>
//     );
// };

// export default Login;
// src/Login.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'; // Optional: For custom styles
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here (e.g., make an API call)
    console.log('Username:', email);
    console.log('Password:', password);
  };

  async function signup(event) {
    event.preventDefault();
    const record = await axios.post("http://localhost:4000/login", {
      email: email,
      password: password
    });
    alert(record.data);
  }

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={signup}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="email"
            id="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <Link to="/Payment"><button type="submit">Login</button></Link>
      </form>
    </div>
  );
};

export default Login;
