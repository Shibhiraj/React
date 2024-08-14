// import React from 'react';

// const ShowCard = ({ show }) => (
//     <div className="show-card">
//       <h3>{show.name}</h3>
//       <p>{show.date} - {show.time}</p>
//       <p>{show.venue}</p>
//       <p>{show.description}</p>
//     </div>
//   );
//   export default ShowCard;
import React from 'react';
import './ShowCard.css';

const ShowCard = ({ show }) => (
  <div className="show-card">
    <img src={show.image || "https://via.placeholder.com/150"} alt={show.name} />
    <div className="show-card-content">
      <h3>{show.name}</h3>
      <p>{show.date} - {show.time}</p>
      <p>{show.venue}</p>
      <p>{show.description}</p>
    </div>
  </div>
);

export default ShowCard;
