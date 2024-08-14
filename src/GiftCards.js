import React from 'react';
import { Link } from 'react-router-dom';
import './GiftCards.css';

import giftcard1 from './images/giftcard1.jpeg';
import giftcard2 from './images/giftcard2.avif';
import giftcard3 from './images/giftcard3.avif';
import giftcard4 from './images/giftcard4.avif';
import giftcard5 from './images/giftcard5.avif';
import giftcard6 from './images/giftcard6.avif';
import giftcard7 from './images/giftcard7.avif';
import giftcard8 from './images/giftcard8.avif';
import giftcard9 from './images/giftcard9.avif';
import giftcard10 from './images/giftcard10.avif';

const GiftCards = () => {
  // Define gift cards with the correct imported image
  const giftCards = [
    { id: 1, name: "Gift Card A", amount: "$50", image: giftcard1 },
    { id: 2, name: "Gift Card B", amount: "$100", image: giftcard2 },
    { id: 3, name: "Gift Card C", amount: "$150", image: giftcard3 },
    { id: 4, name: "Gift Card D", amount: "$200", image: giftcard4 },
    { id: 5, name: "Gift Card E", amount: "$250", image: giftcard5 },
    { id: 6, name: "Gift Card F", amount: "$300", image: giftcard6 },
    { id: 7, name: "Gift Card G", amount: "$350", image: giftcard7 },
    { id: 8, name: "Gift Card H", amount: "$400", image: giftcard8 },
    { id: 9, name: "Gift Card I", amount: "$450", image: giftcard9 },
    { id: 10, name: "Gift Card J", amount: "$500", image: giftcard10 },
    // Add more gift cards as needed
  ];

  return (
    <div className="gift-cards">
      <h2>Gift Cards</h2>
      <div className="gift-cards-container">
        {giftCards.map(card => (
          <div key={card.id} className="gift-card">
            <Link to="/Offers">
              <img src={card.image} alt={card.name} />
            </Link>
            <h3>{card.name}</h3>
            <p>{card.amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GiftCards;
