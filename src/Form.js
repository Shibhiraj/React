// Form.js
import React, { useState } from 'react';
import InputField from './InputField';

const Form = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputField label="Event Name" type="text" name="eventName" onChange={handleChange} />
      <InputField label="Date" type="date" name="date" onChange={handleChange} />
      <InputField label="Location" type="text" name="location" onChange={handleChange} />
      {/* Add more input fields as needed */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
