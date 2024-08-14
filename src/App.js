// import React, { useState } from 'react';
// import './App.css';

// function App() {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [errorMessage, setErrorMessage] = useState('');

//     const handleLogin = () => {
//         if (username === "admin" && password === "1234") {
//             alert("Login successful!");
//             // Redirect to another page or perform further actions
//         } else {
//             setErrorMessage('Invalid credentials, please try again.');
//         }
//     };

//     return (
//         <div className="login-container">
//             <h2>Login</h2>
//             {errorMessage && <div className="error-message">{errorMessage}</div>}
//             <div className="input-group">
//                 <label htmlFor="username">Username:</label>
//                 <input
//                     type="text"
//                     id="username"
//                     placeholder="Enter your username"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                 />
//             </div>
//             <div className="input-group">
//                 <label htmlFor="password">Password:</label>
//                 <input
//                     type="password"
//                     id="password"
//                     placeholder="Enter your password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                 />
//             </div>
//             <button className="login-btn" onClick={handleLogin}>Login</button>
//         </div>
//     );
// }

// export default App;


// App.js
// import React from 'react';
// import Header from './Header';
// import Form from './Form';
// import Footer from './Footer';

// const App = () => (
//   <div>
//     <Header />
//     <main>
//       <Form />
//     </main>
//     <Footer />
//   </div>
// );

// export default App;
// import React, { useState } from 'react';

// import Header from './Header';
// import ShowForm from './ShowForm';
// import ShowList from './ShowList';
// import Footer from './Footer';

// const App = () => {
//   const [shows, setShows] = useState([]);

//   const addShow = (show) => {
//     setShows([...shows, show]);
//   };

//   return (
//     <div>
//       <Header />
//       <ShowForm addShow={addShow} />
//       <ShowList shows={shows} />
//       <Footer />
//     </div>
//   );
// };

// export default App;


// import React, { useState } from 'react';
// import Header from './Header';
// import ShowForm from './ShowForm';
// import ShowList from './ShowList';
// import Footer from './Footer';
// import './App.css';

// const App = () => {
//   const [shows, setShows] = useState([]);

//   const addShow = (show) => {
//     setShows([...shows, show]);
//   };

//   return (
//     <div className="app">
//       <Header />
//       <ShowForm addShow={addShow} />
//       <ShowList shows={shows} />
//       <Footer />
//     </div>
//   );
// };

// export default App;
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './Header';
import ShowForm from './ShowForm';
import ShowList from './ShowList';
import Footer from './Footer';
import Signin from './Signin'; // Import the SignIn component
import Login from './Login'; // Import the LoginIn component
import GiftCards from './GiftCards';
import Offers from './Offers';
import Event from './event';
import Listyourshow from './listyourshow';
import Payment from './Payment';
import './App.css';

// const defaultShows = [
//     {
//       name: "Concert A",
//       date: "2024-08-15",
//       time: "19:00",
//       venue: "Venue A",
//       description: "An amazing concert with great performances.",
//       image: "https://via.placeholder.com/150" // Replace with an actual image URL if available
//     },
//     {
//       name: "Show B",
//       date: "2024-08-20",
//       time: "21:00",
//       venue: "Venue B",
//       description: "A thrilling show with exciting acts.",
//       image: "https://via.placeholder.com/150" // Replace with an actual image URL if available
//     },
//     // Add more default shows as needed
//   ];

const App = () => {
  const [shows, setShows] = useState([]);

  const addShow = (show) => {
    setShows([...shows, show]);
  };

  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<ShowList shows={shows} />} />
          <Route path="/list-your-show" element={<ShowForm addShow={addShow} />} />
          <Route path="/Signin" element={<Signin />} /> {/* Add route for SignIn */}
          <Route path="/GiftCards" element={<GiftCards />} />
          <Route path="/Offers" element={<Offers />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/Event" element={<Event />} />
          <Route path="/listyourshow" element={<Listyourshow />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
