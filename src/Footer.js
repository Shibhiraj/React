// // Footer.js
// import React from 'react';

// const Footer = () => (
//   <footer>
//     <p>&copy; 2024 Your Company. All rights reserved.</p>
//   </footer>
// );

// export default Footer;
// import React from 'react';

// const Footer = () => (
//     <footer>
//       <p>© 2024 Show Listing</p>
//       <ul>
//         <li>Contact</li>
//         <li>About</li>
//       </ul>
//     </footer>
//   );
//   export default Footer;
import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="footer">
    <p>© 2024 Show Listing</p>
    <ul>
      <li><a href='https://in.bookmyshow.com/contactus'>Contact</a></li>
      <li><a href='https://in.bookmyshow.com/aboutus'>About</a></li>
    </ul>
    <p className='left'><Link to="/listyourshow">OnlineTickets --&gt; List Your Show</Link></p>
  </footer>
);

export default Footer;
