import { Component } from 'react';

import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  // State -> A way to access / create data from within the component (Properties of a class)
  // State in a component is nothing but just a normal JS Object
  state = {
    // persons --> REACT LIST --> An Array which is a part of your state
    persons: [
      { id:"1011", name: "Stephan", age: 30 },
      { id:"1012", name: "Elenea", age: 27 },
      { id:"1013", name: "Jack", age: 25 },
      { id:"1014", name: "Vicky", age: 23 },
      { id:"1015", name:"Matt", age: 20 }
    ],
    someOtherState: 'Some Other State Value',
    showPerson: false
  }

  onClickEventListner = (e) => {
    console.log(e)
    // DON NOT DO THIS : this.state.persons[0].name = 'Steph'
    this.setState({
      persons: [
        { name: "Steph", age: 30 },
        { name: "Elena", age: 29 },
        { name: "Jacky", age: 25 }
      ]
    })
  }

  switchNameHandler = (e) => {
    this.setState({
      persons: [
        { name: e.target.value, age: 30 },
        { name: "Elena", age: 29 },
        { name: "Jacky", age: 25 }
      ]
    })
  }

  nameChangedHanler = (event, personId) => {
    const personIndex = this.state.persons.findIndex(p => p.id === personId)
    const person = { ...this.state.persons[personIndex] }
    person.name = event.target.value

    const personsCopy = [ ...this.state.persons ]
    personsCopy[personIndex] = person

    this.setState( {persons: personsCopy} )
  }

  deletePersonHanlder = (e, personIndex) => {
    // MUTATING STATE DIRECTLY - const personsCopy = this.state.persons
    const personsCopy = [ ...this.state.persons ]
    personsCopy.splice(personIndex, 1)
    this.setState( {persons: personsCopy} )
  }

  togglePersonsHandler = () => {
    this.setState( {showPerson: !this.state.showPerson} )
  }

  render() {
    // JavaScript
    let persons = null;
    if( this.state.showPerson ) {
      persons = (
              <div>
                <Persons 
                  persons={this.state.persons}
                  changed={this.nameChangedHanler}
                  delete={this.deletePersonHanlder} />
              </div>
      )
    } else {
      persons = null
    }

    return (
      // JSX Expression
      <div className='container'>
        <h1 className='page-header'> {this.props.appTitle} </h1>
        { persons }
        <br /> <br />
        <Cockpit
          toggle={this.togglePersonsHandler} />
      </div>
    );
  }
}

export default App;

// import React, { useState } from 'react';

// import Person from './components/Person/Person';

// import './App.css';

// const App = () => {
//     const [personState, setPersonState] = useState({
//       persons: [
//         { name: "Stephan", age: 30 },
//         { name: "Elenea", age: 27 },
//         { name: "Jack", age: 25 }
//       ]
//     });

//     const [someOtherState, setSomeOtherState] = useState('Some Other State Value')

//     const onClickEventListner = () => {
//       // DON NOT DO THIS : this.state.persons[0].name = 'Steph'
//       setPersonState({
//         persons: [
//           { name: "Steph", age: 30 },
//           { name: "Elena", age: 29 },
//           { name: "Jacky", age: 25 }
//         ]
//       })
//     }

//     return(
//       <div className='container'>
//          <h1 className='page-header'>Person Management System</h1>
//          <Person 
//            name={personState.persons[0].name} 
//            age={personState.persons[0].age} />
//          <Person 
//            name={personState.persons[1].name} 
//            age={personState.persons[1].age} />
//          <Person 
//            name={personState.persons[2].name} 
//            age={personState.persons[2].age}> This is Person - 2 </Person>

//          <button onClick={onClickEventListner} className='btn btn-danger'>Switch Data</button>
//        </div>
//     )
// }

// export default App;