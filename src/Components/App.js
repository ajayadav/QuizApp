import React from 'react';
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import reducer from '../Reducers';
import QuestionCard from './QuestionContainer';
import DummyRoute from './DummyRoute';

const store = createStore(reducer,applyMiddleware(thunk));

class App extends React.Component {
    render() {
        return (
            <Provider store = {store}>
                <DummyRoute />
            </Provider>
        )
    }
}

export default App;