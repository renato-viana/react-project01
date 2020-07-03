import React from 'react';

import classes from './Person.module.css';

// Stateless (presentational component 'dumb')
const person = ({ name, age, children, click, changed }) => {
  console.log('[Persons.js] rendering...');
  return (
    <div className={classes.Person}>
      <p onClick={click}>
        I'm {name} and I am {age} years old!
      </p>
      <p>{children}</p>
      <input type="text" onChange={changed} value={name} />
    </div>
  );
};

export default person;
