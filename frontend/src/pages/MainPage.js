import React from 'react'
import { useSelector } from 'react-redux';
import Layout from '../components/Layout';
import {useLocation} from 'react-router-dom';

export default function MainPage() {

    const signing = useSelector(state=>state.signing);
    

    return (
        <div>
            Strona główna
        </div>
    )
}
