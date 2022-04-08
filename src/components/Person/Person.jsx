const Person = (props) => {
    const textBoxStyle = {
        border: '2px solid red',
        padding: '5px'
    }

    // Props -> A way to access the data from outside the component
    return(
        <div>
            {/* <p className="lead">{props.children}</p> */}
            <p>My name is {props.name} and I am {props.age} years old </p>

            {/* INLINE STYLE IN JSX */}
            {/* <input style={ {border: '2px solid navy'} } onChange={props.changed} type="text" placeholder="enter new name..." /> */}

            {/* PASSING STYLES AS OBJECTS IN JSX */}
            <input style={ textBoxStyle } onChange={props.changed} type="text" placeholder="enter new name..." />
            <hr />
        </div>
    )
}

export default Person;