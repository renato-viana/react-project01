import React from 'react';

import classes from './Cockpit.module.css';

const cockpit = (props) => {
  const assignedClasses = [];
  let btnClasses = '';

  if (props.showPersons) {
    btnClasses = classes.red;
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>Renato is a Software Engineer!</h1>
      <p className={assignedClasses.join(' ')}>
        Programming laguanges javaScript, java and python...
      </p>
      <button className={btnClasses} onClick={props.clicked}>
        Show Persons
      </button>
    </div>
  );
};

export default cockpit;
