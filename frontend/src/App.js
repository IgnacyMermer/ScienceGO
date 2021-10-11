import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import SignIn from './pages/signing/SignIn';
import React, { useEffect } from 'react';
import { isUserLoggedIn } from './store/actions/signingActions';
import ChatPage from './pages/chat/ChatPage';
import SignUp from './pages/signing/SignUp';

function App() {

  const dispatch = useDispatch();
  const signing = useSelector(state=>state.signing);

  useEffect(()=>{
    
    if(!signing.authenticate){
        dispatch(isUserLoggedIn());
    }
    
  }, [signing.authenticate])

  return (
    <div className="App">
        <Router>
          <Switch>
            <Route path='/' exact component={MainPage} />
            <Route path='/zaloguj_sie' exact component={SignIn} />
            <Route path='/zarejestruj_sie' exact component={SignUp} />
            <Route path='/chat' exact component={ChatPage} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;