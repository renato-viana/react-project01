import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

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
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };

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
