import React from 'react';

function CommonInput({ type, placeholder,name, value, onChange, className, style }) {

  return (
      <div>
        <input
          type={type || 'text'}
          placeholder={placeholder || 'Enter Value here'}
          value={value}
          onChange={onChange}
          className={className || 'w-full block border'}
          name={name}
          style={style}
        />
      </div>
  );
}

export default CommonInput;
