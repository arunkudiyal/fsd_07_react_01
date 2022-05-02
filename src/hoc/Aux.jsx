const Aux = props => {
    console.log(props.anObject)
    return <div className={props.classes}>
        { props.children }
    </div>
}

export default Aux;