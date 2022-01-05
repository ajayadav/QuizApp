import React from 'react';
import { connect } from 'react-redux';

class AnswerContainer extends React.Component {
    constructor(props){
        super(props);
    }

    genereateAnswersTable() {
        let isAnswered = false;
        let rows = this.props.appData.map( (ques) => {
            let questionIndex = ques.no - 1;
            isAnswered = (this.props.answerInfo[questionIndex] !== undefined ? true : false);
            return <div key={ques.no} className='row'>
                <div className='col'>
                    {ques.no}
                </div>
                <div className='col-9'>
                    {ques.title}
                </div>
                <div className='col-2'>
                    { isAnswered ? (this.props.answerInfo[questionIndex] == ques.correctOption ? 'Correct' : 'InCorrect') : 'Not Answered'}
                </div>
            </div>
        })
        return rows;
    }

    render() {
        return (
            <div className='qz-ans-container container'>
                <div className='qz-ans-header row'>
                    {/* <div className='row'> */}
                        <div className='col'>
                            S. No.
                        </div>
                        <div className='col-9'>
                            Question
                        </div>
                        <div className='col-2'>
                            Response
                        </div>
                    {/* </div> */}
                </div>
                {/* <div className='qz-ans-body container'> */}
                    {this.genereateAnswersTable()}
                {/* </div> */}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        appData:state.appState.appData,
        answerInfo:state.appState.answerInfo,
        questionIndex:state.appState.questionIndex
    }
}

export default connect(mapStateToProps,null)(AnswerContainer);