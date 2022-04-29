import React from "react";
import { PureComponent } from "react";
import Person from "./Person/Person";

class Persons extends PureComponent {
    // static getDerivedStateFromProps(props, state) {
    //     console.log(`[Persons.js] getDerivedStateFromProps`);
    //     return state;
    // }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log(`[Persons.js] shouldComponentUpdate`);
    //     if( this.props.persons !== nextProps.persons || this.props.clicked !== nextProps.clicked || this.props.delete !== nextProps.delete ) {
    //         console.log('shouldComponentUpdate works...')
    //         return true
    //     } else {
    //         return false
    //     }
    // }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log(`[Persons.js] getSnapshotBeforeUpdate`);
    }

    componentDidUpdate() {
        // Side Effects | Side-Effects
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