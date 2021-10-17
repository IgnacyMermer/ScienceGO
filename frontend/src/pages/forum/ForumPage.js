import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts, addPost } from '../../store/actions/forumActions';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


export default function ForumPage() {

    const forum = useSelector(state => state.forum);
    const signing = useSelector(state => state.signing);
    const dispatch = useDispatch();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState('');
    const [category, setCategory] = useState('Brak');

    const [posts, setPosts] = useState(); 

    useEffect(() => {
        dispatch(getPosts());
    }, []);

    useEffect(()=>{
        if(category==='Brak'){
            setPosts(forum.posts)
        }
        else{
            const postsTemp = forum.posts.filter(function(item, index){
                return item.category===category
            });
            setPosts(postsTemp);
        }
        
    }, [forum.posts, category]);

    return (
        <div>
            <p>Forum</p>
            <FormControl>
                <InputLabel>Kategoria</InputLabel>
                <Select
                    value={category}
                    onChange={(value)=>{
                        setCategory(value.target.value);
                    }}
                >
                    <MenuItem value="Brak">
                        <em>Brak</em>
                    </MenuItem>
                    <MenuItem value='matematyka'>Matematyka</MenuItem>
                    <MenuItem value='fizyka'>Fizyka</MenuItem>
                    <MenuItem value='biologia'>Biologia</MenuItem>
                </Select>
            </FormControl>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {
                    posts && posts.map(post => {
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
                                    <p>
                                        {
                                            post.category
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
        </div>
    )
}
