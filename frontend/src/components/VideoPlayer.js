import { Grid, Paper, Typography } from '@material-ui/core'
import React, { useContext, useEffect, useState } from 'react'
import { SocketContext } from '../SocketContext';
import Options from './Options';
import {Button} from '@material-ui/core';
import {useSelector} from 'react-redux';
import { useHistory } from 'react-router';

export default function VideoPlayer() {

    const signing = useSelector(state=>state.signing);
    const history = useHistory();
    const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);
    
    const [isRecording, setIsRecording] = useState(false);

    useEffect(()=>{
        if(window.localStream!=null&&window.localStream.active){
            setIsRecording(true);
        }
    }, [window.localStream]);

    return (
        <Grid container style={{paddingTop: '80px'}}>
            
            {/*!isRecording?*/
            (<Button onClick={()=>{
                window.location.reload();
            }}>
                Odśwież obraz
            </Button>
            )/*:null*/}
            <p style={{display: 'flex'}}>{
                stream && (
                    <Paper style={{width: '50%', height: 'auto'}}>
                        <Grid item xs={12} md={12} >
                            <Typography variant="h5" gutterBottom >
                                {signing.user?signing.user.firstName:'Użytkownik'}
                            </Typography>
                            <video playsInline muted ref={myVideo} autoPlay={true} style={{maxWidth: '100%', height: 'auto'}} />
                        </Grid>
                    </Paper>
                )
            }
            {
                callAccepted && (
                    <Paper style={{width: '50%', height: 'auto'}}>
                        <Grid item xs={12} md={12} >
                            <Typography variant="h5" gutterBottom >
                                {name}
                            </Typography>
                            <video playsInline ref={userVideo} autoPlay={true} style={{maxWidth: '100%', height: 'auto'}} />
                        </Grid>
                    </Paper>
                )
            }</p>
            <Options name={signing.user?signing.user.firstName:'Użytkownik'}/>
        </Grid>
    )
}
