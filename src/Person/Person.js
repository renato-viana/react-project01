import React from 'react';

import './Person.css'

// Stateless (presentational component 'dumb')
const person = ({ name, age, children, click, changed }) => {
  return (
    <div className='Person'>
      <p onClick={click} >I'm {name} and I am {age} years old!</p>
      <p>{children}</p>
      <input type='text' onChange={changed} value={name} />
    </div>
  );
};

export default person;
