import { Component } from 'react'
import './Header.css'

import Button from '../Button/Button';

class Header extends Component {
    render(props) {
        const {text} = this.props
        console.log('From Header - ' + this.props.text, this.props.btnColor, this.props.btnText)
        return(
            <div>
                <div className='my-div'>
                    <h1> {text} </h1>
                    <Button id='my-btn' btnColor={this.props.btnColor} btnText={this.props.btnText} onClickHandler={this.props.buttonHandler} />
                </div>
                <hr />
            </div>
        )
    }
}

export default Header;