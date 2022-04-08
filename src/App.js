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

  render() {
    return (
      <div className='container'>
        <h1 className='page-header'>Person Management System</h1>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          changed={(e) => this.switchNameHandler(e)} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age} />
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}> This is Person - 2 </Person>
        
        <br /> <br />
        <button onClick={(e) => this.onClickEventListner(e)} className='btn btn-danger'>Switch Data</button>
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