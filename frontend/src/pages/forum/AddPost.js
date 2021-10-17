import React, { useState } from 'react';
import Layout from '../../components/Layout';
import { TextField, Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '../../store/actions/forumActions';

export default function AddPost() {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const signing = useSelector(state => state.signing);
    const dispatch = useDispatch();

    const addPostToDB = () => {
        if (signing.user) {
            dispatch(addPost(title, content, signing.user._id));
            setTitle('');
            setContent('');
        }
    }

    return (
        <Layout>
            <p>Dodaj post</p>
            <p>
                <TextField
                    label="Tytuł"
                    variant="outlined"
                    value={title}
                    onChange={(value) => {
                        setTitle(value.target.value);
                    }}
                    style={{width: '80%'}}
                />
            </p>
            <p>
                <TextField
                    label="Treść"
                    variant="outlined"
                    value={content}
                    multiline
                    onChange={(value) => {
                        setContent(value.target.value);
                    }}
                    style={{width: '80%'}}
                />
            </p>
            <Button onClick={()=>{
                addPostToDB();
            }}>
                Zatwierdź
            </Button>
        </Layout>
    )
}
