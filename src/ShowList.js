// import React from 'react';
// import ShowCard from './ShowCard';

// const ShowList = ({ shows }) => (
//     <div>
//       {shows.map((show, index) => (
//         <ShowCard key={index} show={show} />
//       ))}
//     </div>
//   );
//   export default ShowList;
// import React from 'react';
// import ShowCard from './ShowCard';
// import './ShowList.css';

// const ShowList = ({ shows }) => (
//   <div className="show-list">
//     {shows.map((show, index) => (
//       <ShowCard key={index} show={show} />
//     ))}
//   </div>
// );

// export default ShowList;

import React from 'react';
import ShowCard from './ShowCard';
import './ShowList.css';

const ShowList = ({ shows }) => (
  <div className="show-list">
    {shows.length > 0 ? (
      shows.map((show, index) => (
        <ShowCard key={index} show={show} />
      ))
    ) : (
      <p>No shows available.</p>
    )}
  </div>
);

export default ShowList;

