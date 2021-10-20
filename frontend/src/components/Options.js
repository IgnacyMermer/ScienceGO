import React, {useContext, useEffect, useState} from 'react';
import {Button, TextField, Grid, Typography, Container, Paper} from '@material-ui/core';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {Assignment, Phone, PhoneDisabled} from '@material-ui/icons';
import {SocketContext} from '../SocketContext';
import Notifications from './Notifications';
import { useSelector } from 'react-redux';

export default function Options(props) {

    const {me, callAccepted, name, setName, callEnded, leaveCall, callUser} = useContext(SocketContext);
    const [idToCall, setIdToCall] = useState('');
    const signing = useSelector(state=>state.signing);

    useEffect(()=>{
        setName(signing.user.firstName);
    }, [signing.user]);

    return (
        <Container>
            <Paper elevation={10}>
                <form noValidate autoComplete='off'>
                    <Grid container >
                        <Grid item xs={12} md={6} >
                            <Typography gutterBottom variant="h6">
                                Dołącz do spotkania
                            </Typography>
                            <TextField label="Imię" value={name} onChange={(e)=>{
                                setName(e.target.value);
                            }}/>
                            <CopyToClipboard text={me} >
                                <Button variant="contained" color="primary" fullWidth startIcon={<Assignment fontSize='large'/>}>
                                    Skopiuj id spotkania i udostępnij
                                </Button>
                            </CopyToClipboard>
                        </Grid>
                        <Grid item xs={12} md={6} >
                            <Typography gutterBottom variant="h6">
                                Dołącz do spotkania
                            </Typography>
                            <TextField label="ID spotkania" value={idToCall} onChange={(e)=>{
                                setIdToCall(e.target.value);
                            }}/>
                            {
                                callAccepted&& !callEnded ? (
                                    <Button variant='contained' color='secondary' startIcon={<PhoneDisabled fontSize='large'/>} fullWidth 
                                    onClick={leaveCall}>
                                        Opuść rozmowę
                                    </Button>
                                ):(
                                    <Button variant='contained' color='secondary' startIcon={<Phone fontSize='large'/>} fullWidth 
                                    onClick={()=>callUser(idToCall)}>
                                        Dołącz
                                    </Button>
                                )
                            }
                        </Grid>
                    </Grid>
                </form>
            </Paper>
            <Notifications/>
        </Container>
    )
}
