import React from 'react';
import { connect } from 'react-redux';

import TitleCard from './TitleCard';
import OptionsList from './OptionsList';
import Footer from './Footer';
import ClockTimer from '../Timer/ClockTimer';

import { loadQuiz,submitQuestion,skipQuestion } from '../../Actions/appStateActions';

class QuestionCard extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.loadQuiz();
    }

    render() {
        let selectedQuestion;
        if(this.props.appData)
            selectedQuestion = this.props.appData[this.props.questionIndex]
        return (
            <div className='qz-ques'>
                {selectedQuestion && 
                    <React.Fragment>
                        <TitleCard no={this.props.questionIndex} text={selectedQuestion.title} /> 
                        <OptionsList options={selectedQuestion.options} />
                        <Footer skipQuestion = {this.props.skipQuestion } submitQuestion = {this.props.submitQuestion }/>
                        <ClockTimer key={this.props.questionIndex}/>
                    </React.Fragment>
                }
            </div>
        )
        
    }
}

const mapStateToProps = (state) => {
    return {
        appData:state.appState.appData,
        questionIndex:state.appState.questionIndex
    }
}

export default connect(mapStateToProps,{
    loadQuiz,
    submitQuestion,
    skipQuestion
})(QuestionCard);