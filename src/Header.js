// // Header.js
// import React from 'react';

// const Header = () => (
//   <header>
//     <h1>List Your Show</h1>
//     {/* Add navigation links if needed */}
//   </header>
// );

// export default Header;
// import React from 'react';
// const Header = () => (
//     <nav>
//       <h1>Show Listing</h1>
//       <ul>
//         <li>Home</li>
//         <li>List Your Show</li>
//       </ul>
//     </nav>
//   );
//   export default Header;
// import React from 'react';
// import './Header.css';

// const Header = () => (
//   <header className="header">
//     <h1 className="header-title">Show Listing</h1>
//     <nav className="header-nav">
//       <ul>
//         <li>Home</li>
//         <li>ListYourShow</li>
//         <li>Corporates</li>
//         <li>Offers</li>
//         <li>Gift Cards</li>
//         <li><button className='signbtn'>Sign in</button></li>
//       </ul>
//     </nav>
//   </header>
// );

// export default Header;

import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header className="header">
    <h1 className="header-title">Event Management</h1>
    <nav className="header-nav">
      <ul>
        <li><Link to="/event"><button className='nav'>Home</button></Link></li>
        <li><Link to="/listyourshow"><button className='nav'>ListYourShow</button></Link></li>
        <li><Link to="/Offers"><button className='nav'>Offers</button></Link></li>
        <li><Link to="/GiftCards"><button className='nav'>Gift Cards</button></Link></li>
        <li><Link to="/Signin"><button className='signbtn'>Sign in</button></Link></li> 
      </ul>
    </nav>
  </header>
);

export default Header;
