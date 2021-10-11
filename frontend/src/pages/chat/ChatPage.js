import React from 'react';
import Layout from '../../components/Layout';
import { useSelector, useDispatch } from 'react-redux';

export default function ChatPage() {

    const message = useSelector(state => state.message);
    const signing = useSelector(state => state.signing);
    const dispatch = useDispatch();

    return (
        <Layout>
            
        </Layout>
    )
}
