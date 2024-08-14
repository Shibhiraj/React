// import React, { useState } from 'react';


// const ShowForm = ({ addShow }) => {
//     const [show, setShow] = useState({
//       name: '',
//       date: '',
//       time: '',
//       venue: '',
//       description: ''
//     });
  
//     const handleChange = (e) => {
//       const { name, value } = e.target;
//       setShow({
//         ...show,
//         [name]: value,
//       });
//     };
  
//     const handleSubmit = (e) => {
//       e.preventDefault();
//       addShow(show);
//       setShow({
//         name: '',
//         date: '',
//         time: '',
//         venue: '',
//         description: ''
//       });
//     };
  
//     return (
//       <form onSubmit={handleSubmit}>
//         <input name="name" placeholder="Show Name" value={show.name} onChange={handleChange} required />
//         <input name="date" type="date" value={show.date} onChange={handleChange} required />
//         <input name="time" type="time" value={show.time} onChange={handleChange} required />
//         <input name="venue" placeholder="Venue" value={show.venue} onChange={handleChange} required />
//         <textarea name="description" placeholder="Description" value={show.description} onChange={handleChange} required />
//         <button type="submit">List Show</button>
//       </form>
//     );
//   };
//   export default ShowForm;
import React, { useState } from 'react';
import './ShowForm.css';

const ShowForm = ({ addShow }) => {
  const [show, setShow] = useState({
    name: '',
    date: '',
    time: '',
    venue: '',
    description: '',
    image: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShow({
      ...show,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addShow(show);
    setShow({
      name: '',
      date: '',
      time: '',
      venue: '',
      description: '',
      image: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="show-form">
      <input name="name" placeholder="Show Name" value={show.name} onChange={handleChange} required />
      <input name="date" type="date" value={show.date} onChange={handleChange} required />
      <input name="time" type="time" value={show.time} onChange={handleChange} required />
      <input name="venue" placeholder="Venue" value={show.venue} onChange={handleChange} required />
      <textarea name="description" placeholder="Description" value={show.description} onChange={handleChange} required />
      <input name="image" placeholder="Image URL" value={show.image} onChange={handleChange} />
      <button type="submit">List Show</button>
    </form>
  );
};

export default ShowForm;
