const Person = (props) => {

    const textBoxStyle = {
        border: '2px solid red',
        padding: '5px'
    }
    console.log(`[App.js] Person`)

    // Props -> A way to access the data from outside the component
    return(
        <div>
            {/* <p className="lead">{props.children}</p> */}
            <p style={ {fontSize: '1.2em'} }>My name is {props.name} and I am {props.age} years old </p>

            {/* INLINE STYLE IN JSX */}
            {/* <input style={ {border: '2px solid navy'} } onChange={props.changed} type="text" placeholder="enter new name..." /> */}

            {/* PASSING STYLES AS OBJECTS IN JSX */}
            <div className="row">
                <div className="col-xs-6">
                    <input style={ textBoxStyle } onChange={props.changed} type="text" placeholder="enter new name..." />
                </div>
                <div className="col-xs-6">
                    <button onClick={props.clicked} className="btn btn-danger">Delete Person</button>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default Person;