import React from 'react';
import Layout from '../../components/Layout';
import { useParams } from 'react-router';

export default function PostDetailsPage() {

    const {id} = useParams()

    return (
        <Layout>
            <p>{id}</p>
        </Layout>
    )
}
