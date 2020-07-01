import React, { Component } from 'react';
import styled from 'styled-components';

import './App.css';
import Person from './Person/Person';

const StyledButton = styled.button`
  background-color: ${(props) => (props.myAlt ? 'red' : 'green')};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.myAlt ? 'salmon' : 'lightgreen')};
    color: black;
  }
`;

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

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>Renato is a Software Engineer!</h1>
        <p className={classes.join(' ')}>
          Programming laguanges javaScript, java and python...
        </p>
        <StyledButton
          myAlt={this.state.showPersons}
          onClick={this.togglePersonHandler}
        >
          Show Persons
        </StyledButton>
        {persons}
      </div>
    );
  }
}

export default App;
