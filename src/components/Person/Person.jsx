const Person = (props) => {
    // Props -> A way to access the data from outside the component
    return(
        <div>
            {/* <p className="lead">{props.children}</p> */}
            <p>My name is {props.name} and I am {props.age} years old </p>
        </div>
    )
}

export default Person;