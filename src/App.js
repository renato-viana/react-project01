import React, { Component } from 'react';

import classes from './App.module.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component {
  // Stateful (container 'smart' component)
  state = {
    persons: [
      {
        id: 'fdgdfg',
        name: 'Renato',
        age: 31,
      },
      {
        id: 'gfgfdsfsd',
        name: 'Ana',
        age: 30,
      },
      {
        id: 'fgdfgdfg',
        name: 'Lupita',
        age: 29,
      },
    ],
    other: 'some other value',
    showPersons: false,
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons });
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    let persons = null;
    let btnClasses = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <ErrorBoundary>
                key={person.id}
                <Person
                  click={() => this.deletePersonHandler(index)}
                  name={person.name}
                  age={person.age}
                  changed={(event) => this.nameChangedHandler(event, person.id)}
                />
              </ErrorBoundary>
            );
          })}
        </div>
      );

      btnClasses = classes.red;
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>Renato is a Software Engineer!</h1>
        <p className={assignedClasses.join(' ')}>
          Programming laguanges javaScript, java and python...
        </p>
        <button className={btnClasses} onClick={this.togglePersonHandler}>
          Show Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
