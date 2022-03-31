import { Component } from 'react'

class Button extends Component {
    render() {
        // Destructring the Props
        const {color, text} = this.props
        
        const newClass = `btn btn-${color}`
        console.log(newClass)
        return (
            <button className={newClass}>{ text }</button>
        )
    }
}

// Default Props --> When the user does not pass a prop
Button.defaultProps = {
    color: 'primary',
    text: 'Click'
}

export default Button;