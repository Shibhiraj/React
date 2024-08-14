// InputField.js
import React from 'react';

const InputField = ({ label, type, name, onChange }) => (
  <div>
    <label>{label}</label>
    <input type={type} name={name} onChange={onChange} />
  </div>
);

export default InputField;
