import React from 'react'
import { useSelector } from 'react-redux';
import Layout from '../components/Layout';

export default function MainPage() {

    const signing = useSelector(state=>state.signing);

    return (
        <Layout>
            Strona główna
        </Layout>
    )
}
