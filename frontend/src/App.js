import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';
import MainPage from './pages/MainPage';
import SignIn from './pages/signing/SignIn';
import React, { useEffect } from 'react';
import { isUserLoggedIn } from './store/actions/signingActions';
import ChatPage from './pages/chat/ChatPage';
import SignUp from './pages/signing/SignUp';
import ForumPage from './pages/forum/ForumPage';
import AddPost from './pages/forum/AddPost';
import PostDetailsPage from './pages/forum/PostDetailsPage';
import YourAccount from './pages/signing/YourAccount';
import Layout from './components/Layout';
import VideoPlayer from './components/VideoPlayer';
import Kwadrat from './calculators/Kwadrat';
import Prostokat from './calculators/Prostokat';
import Romb from './calculators/Romb';
import Rownoleglobok from './calculators/Rownoleglobok';
import Calculators from './calculators/Calculators';
import Hydrostatyka from './calculators/Hydrostatyka';


function App() {

  const dispatch = useDispatch();
  const signing = useSelector(state => state.signing);
  const location = useLocation();
  

  useEffect(() => {

    if (!signing.authenticate) {
      dispatch(isUserLoggedIn());
    }

  }, [signing.authenticate])

  useEffect(() => {
    if (window.location.href.split('/')[3] !== 'rozmowa') {
      window.localStream && window.localStream.getTracks().forEach(function (track) {
        track.stop();
      });
    }
  }, [location]);

  return (
    <div className="App">
      
        <Layout>
          <Switch>
            <Route path='/' exact component={MainPage} />
            <Route path='/zaloguj_sie' exact component={SignIn} />
            <Route path='/zarejestruj_sie' exact component={SignUp} />
            <Route path='/chat' exact component={ChatPage} />
            <Route path='/forum' exact component={ForumPage} />
            <Route path='/forum/dodaj_post' exact component={AddPost} />
            <Route path='/forum/:id' exact component={PostDetailsPage} />
            <Route path='/twoje_konto' exact component={YourAccount} />
            <Route path='/rozmowa' exact component={VideoPlayer} />
            <Route path='/kalkulatory' exact component={Calculators}/>
            <Route path='/kwadrat' exact component={Kwadrat}/>
            <Route path='/prostokat' exact component={Prostokat}/>
            <Route path='/romb' exact component={Romb} />
            <Route path='/rownoleglobok' exact component={Rownoleglobok} />
            <Route path='/cisnienieHydro' exact component={Hydrostatyka} />
          </Switch>
        </Layout>
    </div>
  );
}

export default App;