import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import signing from './reducers/signingReducer';
import chat from './reducers/chatReducer';
import forum from './reducers/forumReducer';

export default createStore(
    combineReducers({
        signing,
        chat,
        forum
    }),
    {},
    applyMiddleware(logger, thunk)
)