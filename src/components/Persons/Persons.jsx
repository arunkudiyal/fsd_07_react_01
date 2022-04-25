import React from "react";
import { Component } from "react";
import Person from "./Person/Person";

class Persons extends Component {
    // static getDerivedStateFromProps(props, state) {
    //     console.log(`[Persons.js] getDerivedStateFromProps`);
    //     return state;
    // }

    shouldComponentUpdate(nextProps, nextState) {
        console.log(`[Persons.js] shouldComponentUpdate`);
        return false
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log(`[Persons.js] getSnapshotBeforeUpdate`);
    }

    componentDidUpdate() {
        console.log(`[Persons.js] componentDidUpdate`);
    }

    render() {
        console.log(`[Persons.js] rendering...`)
        return this.props.persons.map( (person, index) => {
            return (
                <Person
                    key={person.id} 
                    name={person.name} 
                    age={person.age}
                    changed={(e) => this.props.changed(e, person.id)}
                    clicked={(e) => this.props.delete(e, index)} />
            )
        })
    }
}

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