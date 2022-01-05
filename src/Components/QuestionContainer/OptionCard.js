import React from 'react';
import { connect } from 'react-redux';

import { selectOption } from '../../Actions/appStateActions';

class OptionCard extends React.Component {
    constructor(props){
        super(props);
        this.selectAnswer = this.selectAnswer.bind(this)
    }

    selectAnswer(event) {
        this.props.selectOption(this.props.option.index);
    }

    render() {
        let isChecked = false;
        return (
            <div className='qz-option' index={ this.props.option.index}>
                <input onChange={this.selectAnswer} id={'opt' + this.props.option.index} name="qz-option" type='radio'/>
                <label className='qz-option-text' htmlFor = {'opt' + this.props.option.index}> {this.props.option.text} </label>
            </div>
        )
    }
}

export default connect(null,{
    selectOption
})(OptionCard);