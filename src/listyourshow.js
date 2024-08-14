// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './listyourshow.css';
// import event5 from './images/event5.avif';
// import event6 from './images/event6.avif';
// import event7 from './images/event7.avif';
// import event8 from './images/event8.avif';
// import event9 from './images/event9.jpeg';
// import event10 from './images/event10.jpeg';
// import event11 from './images/event11.jpeg';
// import event12 from './images/event12.jpeg';

// // Dummy event data (replace with actual data source if available)
// const events = [
//   { id: 1, name: "Rock Concert", genre: "Music", date: "August 20, 2024", image: event5 },
//   { id: 2, name: "Art Exhibition", genre: "Music", date: "September 5, 2024", image: event6 },
//   { id: 3, name: "Jazz Night", genre: "Music", date: "October 15, 2024", image: event7 },
//   { id: 4, name: "Theater Play", genre: "Music", date: "November 10, 2024", image: event8 },
//   { id: 5, name: "Th", genre: "Art", date: "November 10, 2024", image: event9 },
//   { id: 6, name: "Th", genre: "Art", date: "November 10, 2024", image: event10 },
//   { id: 7, name: "Th", genre: "Art", date: "November 10, 2024", image: event11 },
//   { id: 8, name: "Th", genre: "Art", date: "November 10, 2024", image: event12 },
//   // Add more events with various genres
// ];

// const ListYourShow = () => {
//   const [sortedEvents, setSortedEvents] = useState(events);

//   // Function to sort events by genre
//   const sortByGenre = (genre) => {
//     const sorted = events.filter(event => event.genre === genre);
//     setSortedEvents(sorted);
//   };

//   return (
//     <div className="list-your-show">
//       <h2>Sort Events by Genre</h2>
//       <div className="genre-buttons">
//         <button onClick={() => sortByGenre('Music')}>Music</button>
//         <button onClick={() => sortByGenre('Art')}>Art</button>
//         <button onClick={() => sortByGenre('Theater')}>Theater</button>
//         {/* Add more genre buttons as needed */}
//       </div>
//       <div className="events-container">
//         {sortedEvents.map(event => (
//           <div key={event.id} className="event">
//             <Link to="/Login"><img src={event.image} alt={event.name} /></Link>
//             <h3>{event.name}</h3>
//             <p>{event.date}</p>
//             <p>Genre: {event.genre}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ListYourShow;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './listyourshow.css';
import event5 from './images/event5.avif';
import event6 from './images/event6.avif';
import event7 from './images/event7.avif';
import event8 from './images/event8.avif';
import event9 from './images/event9.jpeg';
import event10 from './images/event10.jpeg';
import event11 from './images/event11.jpeg';
import event12 from './images/event12.jpeg';

// Dummy event data (replace with actual data source if available)
const events = [
  { id: 1, name: "Rock Concert", genre: "Music", date: "August 20, 2024", image: event5 },
  { id: 2, name: "Art Exhibition", genre: "Music", date: "September 5, 2024", image: event6 },
  { id: 3, name: "Jazz Night", genre: "Music", date: "October 15, 2024", image: event7 },
  { id: 4, name: "Theater Play", genre: "Music", date: "November 10, 2024", image: event8 },
  { id: 5, name: "Art Show", genre: "Art", date: "November 10, 2024", image: event9 },
  { id: 6, name: "Photography Workshop", genre: "Art", date: "November 10, 2024", image: event10 },
  { id: 7, name: "Sculpture Exhibit", genre: "Art", date: "November 10, 2024", image: event11 },
  { id: 8, name: "Modern Art Fair", genre: "Art", date: "November 10, 2024", image: event12 },
  // Add more events with various genres
];

const ListYourShow = () => {
  const [sortedEvents, setSortedEvents] = useState(events);

  // Function to sort events by genre
  const sortByGenre = (genre) => {
    const sorted = events.filter(event => event.genre === genre);
    setSortedEvents(sorted);
  };

  return (
    <div className="list-your-show">
      <h2>Sort Events by Genre</h2>
      <div className="genre-buttons">
        <button onClick={() => sortByGenre('Music')}>Music</button>
        <button onClick={() => sortByGenre('Art')}>Art</button>
        <button onClick={() => sortByGenre('Theater')}>Theater</button>
        {/* Add more genre buttons as needed */}
      </div>
      <div className="events-container">
        {sortedEvents.length > 0 ? (
          sortedEvents.map(event => (
            <div key={event.id} className="event">
              <Link to="/Login"><img src={event.image} alt={event.name} /></Link>
              <h3>{event.name}</h3>
              <p>{event.date}</p>
              <p>Genre: {event.genre}</p>
            </div>
          ))
        ) : (
          <p>No shows available.</p>
        )}
      </div>
    </div>
  );
};

export default ListYourShow;
