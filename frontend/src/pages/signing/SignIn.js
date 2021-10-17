import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '../../store/actions/signingActions';

export default function SignIn() {

    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const signing = useSelector(state=>state.signing);

    const handleSubmit = (e) => {
        if(e!=undefined){
            e.preventDefault();
        }
        dispatch(signIn({email, password}));
    }
    
    useEffect(()=>{
        if(signing.authenticate){
            history.goBack();
        }
    }, [signing.authenticate])

    return (
        <div>
            <form className="white" onSubmit={handleSubmit}>
                <h2 className="grey-text text-darken-3">Zaloguj się</h2>
                <p>
                    <TextField
                        id="outlined-email-input"
                        label="Email"
                        type="email"
                        autoComplete="current-email"
                        variant="outlined"
                        value={email}
                        onChange={(value) => {
                            setEmail(value.target.value);
                        }}
                    />
                </p>
                <p>
                    <TextField
                        id="outlined-password-input"
                        label="Hasło"
                        type="password"
                        autoComplete="current-password"
                        variant="outlined"
                        value={password}
                        onChange={(value) => {
                            setPassword(value.target.value);
                        }}
                    />
                </p>
                <div className="input-field">
                    <Button variant="contained" color="primary" onClick={() => {
                        handleSubmit();
                    }}>
                        Zaloguj się
                    </Button>
                    <Link to="/zarejestruj_sie">
                        <Button variant="contained" color="primary">
                            Zarejestruj się
                        </Button>
                    </Link>
                </div>
            </form>
        </div>
    )
}
