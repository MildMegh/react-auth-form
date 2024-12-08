import React from 'react';

function CommonInput({ type, placeholder,name, value, onChange, className }) {
  return (
    <input
      type={type || 'text'}
      placeholder={placeholder || 'Enter Value here'}
      value={value}
      onChange={onChange}
      className={className || 'w-full block border'}
      name={name}
    />
  );
}

export default CommonInput;
