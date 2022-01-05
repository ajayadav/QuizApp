import { LOAD_QUIZ, SKIP_QUESTION, SUBMIT_QUESTION,SELECT_OPTION} from "../Actions/type";

const initialState = {
    showResults:false,
    answerInfo:{}
};

export default (state = initialState,action) => {
    switch(action.type) {
        case LOAD_QUIZ:
            return {
                ...state,
                appData:action.payload,
                questionIndex:0
            }
        case SKIP_QUESTION:
            return {
                ...state,
                currentQuestion:{},
                questionIndex:state.questionIndex + 1,
                showResults:(state.appData.length == state.questionIndex + 1 ? true : false)
            }
        case SUBMIT_QUESTION :
            return {
                ...state,
                answerInfo:{
                    ...state.answerInfo,
                    ...state.currentQuestion
                },
                currentQuestion:{},
                questionIndex:state.questionIndex+1,
                showResults:(state.appData.length == state.questionIndex + 1 ? true : false)
            }
        case SELECT_OPTION : 
            return {
                ...state,
                currentQuestion:{
                    ...state.currentQuestion,
                    [state.questionIndex]:action.payload
                }
            }
        default:
            return state;
    }
}