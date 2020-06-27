import React, { Component, useState } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  // Stateful (container 'smart' component)
  state = {
    persons: [
      {
        name: 'Renato',
        age: 31,
      },
      {
        name: 'Ana',
        age: 30,
      },
      {
        name: 'Lupita',
        age: 29,
      },
    ],
    other: 'some other value',
    showPersons: false,
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {
          name: newName,
          age: 31,
        },
        {
          name: 'Ana',
          age: 30,
        },
        {
          name: 'Julia',
          age: 25,
        },
      ],
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {
          name: 'Renato',
          age: 31,
        },
        {
          name: event.target.value,
          age: 30,
        },
        {
          name: 'Julia',
          age: 25,
        },
      ],
    });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };

    let persons = null;

    if ( this.state.showPersons ) {
      persons = (
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Re!')}
            changed={this.nameChangedHandler}
          >
            My Hobbies: Racing
          </Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
          />
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Renato is a Software Engineer!</h1>
        <p>Programming laguanges javaScript, java and python...</p>
        <button style={style} onClick={this.togglePersonHandler}>
          Show Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;

// const App = (props) => {
//   const [persons, setPersons] = useState({
//     persons: [
//       {
//         name: 'Renato',
//         age: 31,
//       },
//       {
//         name: 'Ana',
//         age: 30,
//       },
//       {
//         name: 'Lupita',
//         age: 29,
//       },
//     ],
//   });

//   const [other, setOther] = useState('some other value');

//   console.log(persons, other);

//   const switchNameHandler = (newName) => {
//     setPersons({
//       persons: [
//         {
//           name: newName,
//           age: 31,
//         },
//         {
//           name: 'Ana',
//           age: 30,
//         },
//         {
//           name: 'Julia',
//           age: 25,
//         },
//       ],
//     });
//   };
