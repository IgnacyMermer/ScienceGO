import './App.css';
import Layout from './components/Layout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import SignIn from './pages/signing/SignIn';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path='/' exact component={MainPage} />
            <Route path='/zaloguj_sie' exact component={SignIn} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
