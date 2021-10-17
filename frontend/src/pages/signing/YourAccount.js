import React from 'react'
import { useSelector } from 'react-redux'
import Layout from '../../components/Layout'

export default function YourAccount() {

    const signing = useSelector(state=>state.signing);

    return (
        <Layout>
            {JSON.stringify(signing)}
            Twoje konto
        </Layout>
    )
}
