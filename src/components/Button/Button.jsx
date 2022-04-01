const Button = ( {btnText, btnColor, onClickHandler} ) => {

    const contextualClass = `btn btn-${btnColor}`
    return(
        <button onClick={onClickHandler} className={contextualClass}> {btnText} </button>
    )
}

export default Button;