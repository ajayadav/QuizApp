import React from 'react';
import {connect} from 'react-redux';

import { skipQuestion } from '../../Actions/appStateActions';

class ClockTimer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds:20
        }
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.setTimer(),
            1000
        );
    }
    
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    setTimer() {
        if(this.state.seconds == 0 ) {
            this.props.skipQuestion();
        }
        else {
            this.setState({
            seconds: this.state.seconds - 1
            });
        }
    }


    render() {
        return (
            <div className="qa-timer">
                <h2>
                    {"00 : " + (this.state.seconds < 10 ? ("0" + this.state.seconds ) : this.state.seconds)}
                </h2>
            </div>
        );
    }
};

export default connect(null,{
    skipQuestion
})(ClockTimer);