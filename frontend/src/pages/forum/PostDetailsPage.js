import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import { useParams } from 'react-router';
import axiosInstance from '../../helpers/axios';
import {useDispatch, useSelector} from 'react-redux';

export default function PostDetailsPage() {

    const { id } = useParams();

    const [post, setPost] = useState(null);
    const dispatch = useDispatch();
    const signing = useSelector(state => state.signing);
    const [contentAnswer, setContentAnswer] = useState('');

    useEffect(() => {
        async function getPost() {
            
            const res = await axiosInstance.post('/concretepost', { '_id': id });
            if (res.status === 200) {
                setPost(res.data.post[0]);
            }
        }
        if (post == null) {
            getPost();
        }
    }, []);

    const addAnswerToDB = () => {

    }

    return (
        <Layout>
            
            <p>{id}</p>
            
            <div>
                <div style={{ width: '100%', background: '#b8b3a5', padding: '50px 30px 50px 30px ', textAlign: 'center', borderRadius: '20px' }}>
                    <h2 style={{ marginBottom: '60px', fontWeight: 'bold' }}>
                        {
                            post && post.title
                        }
                    </h2>
                    <h4 style={{ textAlign: 'left' }}>
                        {
                            post && post.content
                        }
                    </h4>
                </div>
                <h3 style={{ textAlign: 'center', marginTop: '20px', fontWeight: 'bold' }}>Odpowiedzi:</h3>
                <div>
                    {
                        post && post.answers.map((answer, index) => {
                            return(
                                <div>
                                    {answer.content}
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
