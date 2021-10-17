import React, { useEffect, useRef, useState } from 'react';
import Layout from '../../components/Layout';
import { useSelector, useDispatch } from 'react-redux';
import { getMessages, sendMessage } from '../../store/actions/chatActions';
import './Chat.css';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';


export default function ChatPage() {

    const chat = useSelector(state => state.chat);
    const signing = useSelector(state => state.signing);
    const dispatch = useDispatch();

    const ref = useRef(null);

    const [yourMessage, setYourMessage] = useState("");

    useEffect(() => {
        dispatch(getMessages());
    }, [])

    useEffect(() => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: "auto", block: 'nearest', inline: 'end' });
        }
    }, [chat.messages]);

    return (
        <div>
            
            <div style={{paddingTop: '20px'}}>
                <div className='chatContainer'>
                    {
                        chat&&chat.messages && chat.messages.map(m => {
                            return (
                                m.user && <p className={signing.user && (m.user._id == undefined ? m.user : m.user._id) === signing.user._id ?
                                    'myMessage' : 'anotherMessage'} >

                                    <div className={signing.user && (m.user._id == undefined ? m.user : m.user._id) === signing.user._id ?
                                        'messageTextMine' : 'messageTextAnother'}>{m.text}</div>
                                    <div>{m.user.firstName} &emsp;&emsp;&emsp;{new Date(m.date).toLocaleString()}</div>

                                </p>
                            );
                        })
                    }
                    {signing.user && <p className='yourInputMessage'>
                        
                        <TextField id="standard-basic" label="Twoja wiadomość" value={yourMessage} ref={ref}
                            onChange={(value) => setYourMessage(value.target.value)}/>
                        <Button style={{marginTop: '10px'}} onClick={()=>{
                            if(yourMessage!==''){
                                dispatch(
                                    sendMessage({
                                        text: yourMessage,
                                        user: signing.user._id,
                                        date: new Date(Date.now()).toISOString()
                                    })
                                );
                                setYourMessage('');
                            }
                        }} >
                            Wyślij
                        </Button>
                    </p>}
                </div>
            </div>
        </div>
    )
}