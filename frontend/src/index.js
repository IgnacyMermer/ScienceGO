import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/store';
import {ContextProvider} from './SocketContext';
import {BrowserRouter as Router} from 'react-router-dom';
import {createBrowserHistory} from 'history';

const history = createBrowserHistory();

ReactDOM.render(
  <ContextProvider>
  <Provider store={store}>
    <React.StrictMode>
    <Router {...{history}}>
        <App />
      </Router>
    </React.StrictMode>
  </Provider>
  </ContextProvider>,
  document.getElementById('root')
);
