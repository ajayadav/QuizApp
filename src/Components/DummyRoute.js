import React  from "react";
import { connect } from 'react-redux';

import ConditionalRender from "./Utils/ConditionalRender";
import AnswerContainer from "./AnswerContainer";
import QuestionCard from "./QuestionContainer";

class DummyRoute extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const ShowResults = ConditionalRender(AnswerContainer);
        const QuestionContainer = ConditionalRender(QuestionCard)
        return (
            <React.Fragment>
                <ShowResults toLoad = { this.props.showResults } />
                <QuestionContainer toLoad = { !this.props.showResults } />
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        showResults:state.appState.showResults
    }
}

export default connect(mapStateToProps,null)(DummyRoute);