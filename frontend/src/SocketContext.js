import React, { createContext, useState, useRef, useEffect } from 'react';
import { io } from 'socket.io-client';
import Peer from 'simple-peer';


const SocketContext = createContext();

const socket = io('http://localhost:2000');

const ContextProvider = (props) => {

    const [me, setMe] = useState('');
    const [stream, setStream] = useState(null);
    const [call, setCall] = useState(null);
    const [callAccepted, setCallAccepted] = useState(false);
    const [callEnded, setCallEnded] = useState(false);
    const [name, setName] = useState('');
    
    const myVideo = useRef();
    const userVideo = useRef();
    const connectionRef = useRef();

    useEffect(() => {
        if (window.location.href.split('/')[3]==='rozmowa') {
            navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(currentStream => {
                setStream(currentStream);

                myVideo.current.srcObject = currentStream;
                window.localStream = currentStream;
                console.log(window.localStream);
            }).catch(error => {

            });
        }
        else{
            window.localStream&&window.localStream.getTracks().forEach(function(track) {
                track.stop();
            });
        }

        socket.on('me', (id) => {
            setMe(id);
        });

        socket.on('calluser', ({ from, name: callerName, signal }) => {
            setCall({ isReceivedCall: true, from, name: callerName, signal });
        });
    }, []);

    const answerCall = () => {
        setCallAccepted(true);

        const peer = new Peer({ initiator: false, trickle: false, stream });

        peer.on('signal', (data) => {
            socket.emit('answercall', { signal: data, to: call.from });
        });

        peer.on('stream', (currentStream) => {
            userVideo.current.srcObject = currentStream;
        });

        peer.signal(call.signal);

        connectionRef.current = peer;
    };

    const callUser = (id) => {
        const peer = new Peer({ initiator: true, trickle: false, stream });

        peer.on('signal', (data) => {
            socket.emit('calluser', { userToCall: id, signalData: data, from: me, name });
        });

        peer.on('stream', (currentStream) => {
            userVideo.current.srcObject = currentStream;
        });

        socket.on('callaccepted', (signal) => {
            setCallAccepted(true);

            peer.signal(signal);

        });

        connectionRef.current = peer;
    };

    const leaveCall = () => {
        setCallEnded(true);

        connectionRef.current.destroy();

        window.location.reload();
    };

    return (
        <SocketContext.Provider value={{
            call,
            callAccepted,
            myVideo,
            userVideo,
            stream,
            name,
            setName,
            callEnded,
            me,
            callUser,
            leaveCall,
            answerCall
        }}>
            {props.children}
        </SocketContext.Provider>
    )
}

export { ContextProvider, SocketContext };