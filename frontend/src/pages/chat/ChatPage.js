import React, { useEffect, useRef, useState } from 'react';
import Layout from '../../components/Layout';
import { useSelector, useDispatch } from 'react-redux';
import { getMessages, sendMessage } from '../../store/actions/chatActions';
import './Chat.css';
import TextField from '@material-ui/core/TextField';


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
        <Layout>
            <button
                onClick={() => {
                    dispatch(
                        sendMessage({
                            text: yourMessage,
                            author: { id: signing.user._id },
                            date: new Date(Date.now()).toISOString()
                        })
                    );
                    setYourMessage('');
                }
                }
            >
                Send message from me
            </button>
            <button onClick={() => {
                dispatch(sendMessage({ text: "message", author: { id: "61111b0b86b9d001482a6943", nick: "Paweł" }, date: Date.now() }));
                setYourMessage('');
            }}>
                Send message from another user
            </button>

            <div >
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
                    </p>}
                </div>
            </div>
        </Layout>
    )
}