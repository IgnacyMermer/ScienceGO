import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import signing from './reducers/signingReducer';
import chat from './reducers/chatReducer';
import forum from './reducers/forumReducer';
import {composeWithDevTools} from 'redux-devtools-extension';

export default createStore(
    combineReducers({
        signing,
        chat,
        forum
    }),
    {},
    composeWithDevTools(
        applyMiddleware(logger, thunk)
    )
)