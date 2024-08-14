import React from 'react';
import { Link } from 'react-router-dom';
import './event.css';

import event1 from './images/event1.avif';
import event2 from './images/event2.avif';
import event3 from './images/event3.avif';
import event4 from './images/event4.avif';
import Payment from './Payment';
// import event5 from './images/event5.avif';
// import event6 from './images/event6.avif';
// import event7 from './images/event7.avif';
// import event8 from './images/event8.avif';
// import event9 from './images/event9.avif';
// import event10 from './images/event10.avif';

const event = () => {
  // Define events with the correct imported image
  const events = [
    { id: 1, name: "GEMINI CIRCUS", date: "August 20, 2024", image: event1 },
    { id: 2, name: "Vikkals of Vikram", date: "31 August 2024 - 28 Sep 2024", image: event2 },
    { id: 3, name: "SPB Charans -ONE MAN SHOW Hits of Ilayaraja", date: "SUN 25 August 2024 at 6:05 PM", image: event3 },
    { id: 4, name: "Kisi Ko Batana Mat Ft. Anubhav Singh Bassi", date: "18 August 2024 - 30 August 2024", image: event4 },
    // { id: 5, name: "Event E", date: "December 1, 2024", image: event5 },
    // { id: 6, name: "Event F", date: "December 20, 2024", image: event6 },
    // { id: 7, name: "Event G", date: "January 10, 2025", image: event7 },
    // { id: 8, name: "Event H", date: "February 14, 2025", image: event8 },
    // { id: 9, name: "Event I", date: "March 1, 2025", image: event9 },
    // { id: 10, name: "Event J", date: "April 5, 2025", image: event10 },
    // Add more events as needed
  ];

  return (
    <div className="events">
      <h2>UPCOMING EVENTS</h2>
      <div className="events-container">
        {events.map(event => (
          <div key={event.id} className="event">
            <Link to="/Login">
              <img src={event.image} alt={event.name} />
            </Link>
            <h3>{event.name}</h3>
            <p>{event.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default event;
