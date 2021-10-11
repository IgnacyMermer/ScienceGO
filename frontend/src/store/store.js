import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import signing from './reducers/signingReducer';
import chat from './reducers/chatReducer';

export default createStore(
    combineReducers({
        signing,
        chat
    }),
    {},
    applyMiddleware(logger, thunk)
)