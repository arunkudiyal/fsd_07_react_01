import { Component } from 'react';

import './App.css';
import Person from './components/Person/Person';

class App extends Component {
  // State -> A way to access / create data from within the component (Properties of a class)
  // State in a component is nothing but just a normal JS Object
  state = {
    persons: [
      { name: "Stephan", age: 30 },
      { name: "Elenea", age: 27 },
      { name: "Jack", age: 25 }
    ],
    someOtherState: 'Some Other State Value'
  }

  onClickEventListner = () => {
    // DON NOT DO THIS : this.state.persons[0].name = 'Steph'
    this.setState({
      persons: [
        { name: "Steph", age: 30 },
        { name: "Elena", age: 29 },
        { name: "Jacky", age: 25 }
      ]
    })
  }

  render() {
    console.log(this.state)

    return (
      <div className='container'>
        <h1 className='page-header'>Person Management System</h1>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age} />
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}> This is Person - 2 </Person>

        <button onClick={this.onClickEventListner} className='btn btn-danger'>Switch Data</button>
      </div>
    );
  }
}

export default App;