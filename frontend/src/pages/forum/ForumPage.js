import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts, addPost } from '../../store/actions/forumActions';
import Button from '@material-ui/core/Button';

export default function ForumPage() {

    const forum = useSelector(state => state.forum);
    const signing = useSelector(state => state.signing);
    const dispatch = useDispatch();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState('');
    

    useEffect(() => {
        dispatch(getPosts());
    }, []);

    return (
        <Layout>
            <p>Forum</p>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {
                    forum && forum.posts.map(post => {
                        return (
                            <Link to={'/forum/' + post._id} style={{ textDecoration: 'none', color: 'black' }}>
                                <div style={{ width: 'fit-content', marginBottom: '30px', padding: '0 10px 0 10px', border: '2px solid black' }}>
                                    <p>
                                        {
                                            post.title
                                        }
                                    </p>
                                    <p>
                                        {
                                            post.content
                                        }
                                    </p>
                                    <p>
                                        {
                                            post.user.username
                                        }
                                    </p>
                                    <p>Odpowiedzi: {post.answers.length}</p>
                                </div>
                            </Link>
                        );
                    })
                }
            </div>
            <Link to='../forum/dodaj_post'>
                <Button>
                    Dodaj post
                </Button>
            </Link>
        </Layout>
    )
}
