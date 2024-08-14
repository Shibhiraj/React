// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Offers.css';

// // Import images
// import offer1 from './images/offer1.avif';
// import offer2 from './images/offer2.avif';
// import offer3 from './images/offer3.avif';
// import offer4 from './images/offer4.avif';
// import offer5 from './images/offer5.avif';
// import offer6 from './images/offer6.avif';
// // import offer7 from './images/offer7.avif';
// // import offer8 from './images/offer8.avif';
// // import offer9 from './images/offer9.avif';
// // import offer10 from './images/offer10.avif';

// const Offers = () => {
//   // Define offers with the correct imported image
//   const offers = [
//     { id: 1, title: "Offer A", description: "Description for Offer A", image: offer1 },
//     { id: 2, title: "Offer B", description: "Description for Offer B", image: offer2 },
//     { id: 3, title: "Offer C", description: "Description for Offer C", image: offer3 },
//     { id: 4, title: "Offer D", description: "Description for Offer D", image: offer4 },
//     { id: 5, title: "Offer E", description: "Description for Offer E", image: offer5 },
//     { id: 6, title: "Offer F", description: "Description for Offer F", image: offer6 },
//     // { id: 7, title: "Offer G", description: "Description for Offer G", image: offer7 },
//     // { id: 8, title: "Offer H", description: "Description for Offer H", image: offer8 },
//     // { id: 9, title: "Offer I", description: "Description for Offer I", image: offer9 },
//     // { id: 10, title: "Offer J", description: "Description for Offer J", image: offer10 },
//     // Add more offers as needed
//   ];

//   return (
//     <div className="offers">
//       <h2>Special Offers</h2>
//       <div className="offers-container">
//         {offers.map(offer => (
//           <div key={offer.id} className="offer-card">
//             <Link to="/offer-details">
//               <img src={offer.image} alt={offer.title} />
//             </Link>
//             <h3>{offer.title}</h3>
//             <p>{offer.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Offers;
// src/Offers.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Offers.css';

// Import images
import offer1 from './images/offer1.avif';
import offer2 from './images/offer2.avif';
import offer3 from './images/offer3.avif';
import offer4 from './images/offer4.avif';
import offer5 from './images/offer5.avif';
import offer6 from './images/offer6.avif';
// import offer7 from './images/offer7.avif';
// import offer8 from './images/offer8.avif';
// import offer9 from './images/offer9.avif';
// import offer10 from './images/offer10.avif';

const Offers = () => {
  // Define offers with the correct imported image
  const offers = [
    { id: 1, title: "SBI CARD OFFER", description:<a href='https://in.bookmyshow.com/offers/reliance-sbi-card-prime/SBIRIL03241'>About offer</a>, image: offer1 },
    { id: 2, title: "RBL BANK OFFER", description:<a href='https://in.bookmyshow.com/offers/rbl-bank-monthly-offer/RBLMON1216'>About offer</a>, image: offer2 },
    { id: 3, title: "YES BANK OFFER", description:<a href='https://in.bookmyshow.com/offers/yes-bank-marquee-credit-card-offer/YESMRQ1123'>About offer</a>, image: offer3 },
    { id: 4, title: "HDFC BANK TIMES CARD OFFER", description:<a href='https://in.bookmyshow.com/offers/hdfc-bank-timescard-offer/HTCCC0324'>About offer</a>, image: offer4 },
    { id: 5, title: "HSBS OFFER", description:<a href='https://in.bookmyshow.com/offers/hsbc-premier-mastercard-credit-card-offer/HSBCP0923'>About offer</a>, image: offer5 },
    { id: 6, title: "BOB RuPay PLATINUM CARD", description:<a href='https://in.bookmyshow.com/offers/bank-of-baroda-easemytrip-rupay-platinum-debit-card/RPBOB0724'>About offer</a>, image: offer6 },
    // { id: 7, title: "Offer G", description: "Description for Offer G", image: offer7 },
    // { id: 8, title: "Offer H", description: "Description for Offer H", image: offer8 },
    // { id: 9, title: "Offer I", description: "Description for Offer I", image: offer9 },
    // { id: 10, title: "Offer J", description: "Description for Offer J", image: offer10 },
    // Add more offers as needed
  ];

  return (
    <div className="offers">
      <h2>Special Offers</h2>
      <div className="offers-container">
        {offers.map(offer => (
          <div key={offer.id} className="offer-card">
            <Link to="/Login">
              <img src={offer.image} alt={offer.title} />
            </Link>
            <h3>{offer.title}</h3>
            <p>{offer.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;
