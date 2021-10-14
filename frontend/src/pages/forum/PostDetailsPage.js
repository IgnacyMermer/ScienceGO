import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import { useParams } from 'react-router';
import axiosInstance from '../../helpers/axios';
import {useDispatch, useSelector} from 'react-redux';
import { addAnswerToPost } from '../../store/actions/forumActions';

export default function PostDetailsPage() {

    const { id } = useParams();

    const [post, setPost] = useState(null);
    const dispatch = useDispatch();
    const signing = useSelector(state => state.signing);
    const forum = useSelector(state => state.forum);
    const [contentAnswer, setContentAnswer] = useState('');

    useEffect(() => {
        async function getPost() {
            
            const res = await axiosInstance.post('/concretepost', { '_id': id });
            if (res.status === 200) {
                setPost(res.data.post);
            }
        }
        //if (post == null) {
            getPost();
        //}
    }, [forum.posts]);

    const addAnswerToDB = () => {

        dispatch(addAnswerToPost(contentAnswer, signing.user, id));
        setContentAnswer('');

    }

    return (
        <Layout>
            <div>
                <div style={{ background: '#b8b3a5', padding: '50px 30px 50px 30px ', textAlign: 'center', borderRadius: '20px', marginTop: '30px' }}>
                    <h2 style={{ marginBottom: '60px', fontWeight: 'bold' }}>
                        {
                            post && post.title
                        }
                    </h2>
                    <h3>{post&&JSON.stringify(post.user.username)}</h3>
                    <h4 style={{ textAlign: 'left' }}>
                        {
                            post && post.content
                        }
                    </h4>
                </div>
                <h3 style={{ textAlign: 'center', marginTop: '20px', fontWeight: 'bold' }}>Odpowiedzi:</h3>
                <div style={{display: 'flex'}}>
                    {
                        post && post.answers.map((answer, index) => {
                            return(
                                <div style={{border: '2px solid black', width: '30%'}}>
                                    <p>{answer.content}</p>
                                    <p>{answer.user._id}</p>
                                    <p>{answer.user.firstName}</p>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
            
            <input value={contentAnswer} placeholder="content" onChange={(e) => {
                setContentAnswer(e.target.value);
            }} />
            
            <button onClick={() => {
                addAnswerToDB();
            }}>
                Dodaj
            </button>

        </Layout>
    )
}
