import React from "react";
import Person from "./Person/Person";

const Persons = (props) => props.persons.map( (person, index) => {
    console.log(`[App.js] Perons`)
    return <Person
                key={person.id} 
                name={person.name} 
                age={person.age}
                changed={(e) => props.changed(e, person.id)}
                clicked={(e) => props.delete(e, index)} />
})

// <div>
//       <Person
//         name={this.state.persons[0].name}
//         age={this.state.persons[0].age} />
//       <Person
//         name={this.state.persons[1].name}
//         age={this.state.persons[1].age} />
//       <Person
//         name={this.state.persons[2].name}
//         age={this.state.persons[2].age} />
//       <Person
//         name={this.state.persons[3].name}
//         age={this.state.persons[3].age} />
// </div>

export default Persons;