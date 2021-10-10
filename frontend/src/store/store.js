import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import signing from './reducers/signingReducer';

export default createStore(
    combineReducers({
        signing,
    }),
    {},
    applyMiddleware(logger, thunk)
)