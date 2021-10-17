import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import { useParams } from 'react-router';
import axiosInstance from '../../helpers/axios';
import { useDispatch, useSelector } from 'react-redux';
import { addAnswerToPost } from '../../store/actions/forumActions';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

export default function PostDetailsPage() {

    const { id } = useParams();

    const [post, setPost] = useState(null);
    const dispatch = useDispatch();
    const signing = useSelector(state => state.signing);
    const forum = useSelector(state => state.forum);
    const [contentAnswer, setContentAnswer] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        async function getPost() {

            //send post to database and get posts
            const res = await axiosInstance.post('/concretepost', { '_id': id });
            if (res.status === 200) {
                setPost(res.data.post);
            }
        }

        //get all posts on every change in forum dispatch
        getPost();

    }, [forum.posts]);

    const addAnswerToDB = () => {

        if (contentAnswer != '') {
            dispatch(addAnswerToPost(contentAnswer, signing.user, id));
            setContentAnswer('');
            setOpen(false);
        }
        else {
            setErrorMessage('Treść odpowiedzi nie może być pusta!');
        }

    }

    const [open, setOpen] = useState(false);

    return (
        <Layout>
            <div>
                <div style={{ background: '#b8b3a5', padding: '50px 30px 50px 30px ', textAlign: 'center', borderRadius: '20px', marginTop: '30px' }}>
                    <h2 style={{ marginBottom: '60px', fontWeight: 'bold' }}>
                        {
                            post && post.title
                        }
                    </h2>
                    <h3>{post && JSON.stringify(post.user.username)}</h3>
                    <h4 style={{ textAlign: 'left' }}>
                        {
                            post && post.content
                        }
                    </h4>
                </div>
                <h3 style={{ textAlign: 'center', marginTop: '20px', fontWeight: 'bold' }}>Odpowiedzi:</h3>
                <div style={{ display: 'flex' }}>
                    {
                        post && post.answers.map((answer, index) => {
                            return (
                                <div style={{ border: '2px solid black', width: '30%' }}>
                                    <p>{answer.content}</p>
                                    <p>{answer.user._id}</p>
                                    <p>{answer.user.firstName}</p>
                                </div>
                            );
                        })
                    }
                </div>
            </div>

            {signing.authenticate && <Button onClick={() => {
                setOpen(true);
            }}>
                Dodaj odpowiedź
            </Button>}

            <Dialog open={open} onClose={() => {
                setOpen(false);
            }} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Twoja odpowiedź</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Odpowiedź powinna ...
                    </DialogContentText>
                    <TextField
                        autoFocus
                        multiline
                        margin="dense"
                        label="Treść"
                        fullWidth
                        value={contentAnswer}
                        onChange={(value) => {
                            setContentAnswer(value.target.value);
                        }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => {
                        setOpen(false);
                    }} color="primary">
                        Anuluj
                    </Button>
                    <Button onClick={addAnswerToDB} color="primary">
                        Dodaj
                    </Button>
                </DialogActions>
                <Snackbar open={errorMessage!=''} autoHideDuration={6000} onClose={()=>{
                    setErrorMessage('');
                }}>
                    <Alert onClose={()=>{
                        setErrorMessage('');
                    }} severity="error">
                        {errorMessage}
                    </Alert>
                </Snackbar>
            </Dialog>

        </Layout>
    )
}
