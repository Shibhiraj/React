

// const Signin = () => {
//   return (
//     <div>
//       <h1>Get started</h1>
//       <h2>Sign In</h2>
//       <form>
//         <div ><input type="firstname" placeholder="firstname" required /></div><br></br>
//         <div ><input type="lastname" placeholder="lastname" required /></div><br></br>
//         <div ><input type="email" placeholder="Email" required /></div><br></br>
//         <div ><input type="password" placeholder="Enter Password" required /></div><br></br>
//         <div ><input type="password" placeholder="Confirm Password" required /></div><br></br>
//         <div ><button>Sign In</button></div><br></br><br></br><br></br>
//       </form>
//     </div>
//   );
// };

// export default Signin;

import React, { useState } from 'react';
import './Signin.css'; // Optional: For custom styles
import axios from 'axios';


const Signin = () => {
  // const [firstname, setFirstname] = useState('');
  // const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    // console.log('Firstname:', firstname);
    // console.log('Lastname:', lastname);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  async function signup(event) {
    event.preventDefault();
    const record = await axios.post("http://localhost:4000/signup", {
      // firstname : firstname,
      // lastname : lastname,
      email: email,
      password: password
    });
    alert(record.data);
  }


  return (
    <div className="sign-in-container">
      <h2>Sign In</h2>
      <form onSubmit={signup}>
        {/* <div className="form-group">
          <label htmlFor="firstname">Firstname:</label>
          <input
            type="firstname"
            id="firstname"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            required
          />
        </div> 
        <div className="form-group">
          <label htmlFor="lastname">Lastname:</label>
          <input
            type="lastname"
            id="lastname"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            required
          />
        </div>*/}
        <div className="form-group">
          <label htmlFor="email">Enter Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Enter New Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {/* <div className="form-group">
          <label htmlFor="password">Confirm Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div> */}
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default Signin;
