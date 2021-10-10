import axiosInstance from "../../helpers/axios";
import { signingConstants } from "../constants/signingConstants"


export const signIn = (user)=>{

    return async (dispatch)=>{

        dispatch({type: signingConstants.SIGN_IN_REQUEST});

        const res = await axiosInstance.post('/signin', {
            ...user 
        });

        if(res.status===200){
            const {token, user} = res.data;
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));
            dispatch({
                type: signingConstants.SIGN_IN_SUCCESS,
                payload: {
                    token, user
                }
            })
        }
        else{
            if(res.status===500){
                dispatch({
                    type: signingConstants.SIGN_IN_FAILURE,
                    payload: {error: res.data.error}
                })
            }
        }
    }
}

export const isUserLoggedIn=()=>{
    return async dispatch=>{
        const token = localStorage.getItem('token');
        if(token){
            const user = JSON.parse(localStorage.getItem('user'));
            dispatch({
                type: signingConstants.SIGN_IN_SUCCESS,
                payload: {
                    token, user
                }
            })
        }
        else{
            dispatch({
                type: signingConstants.SIGN_IN_FAILURE,
                payload: {error: 'Failed to login'}
            })
        }
        
    }
}

export const signout=()=>{
    return async dispatch=>{

        dispatch({type: signingConstants.SIGN_OUT_REQUEST});

        const res = await axiosInstance.post('/signout');

        if(res.status===200){
            localStorage.clear();
            dispatch({type: signingConstants.SIGN_OUT_SUCCESS});
        }
        else{
            dispatch({
                type: signingConstants.SIGN_OUT_FAILURE,
                payload: {error: res.data.error}
            });
        }
    }
}

export const signUp=(user)=>{
    return async dispatch=>{
        dispatch({type: signingConstants.SIGN_UP_REQUEST})

        const res = await axiosInstance.post('/signup', {
            ...user
        });

        if(res.status===200){

            const {token, user} = res.data;
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));
            dispatch({
                type: signingConstants.SIGN_UP_SUCCESS,
                payload: {
                    token, user
                }
            })
        }
        else{
            if(res.status===500){
                dispatch({
                    type: signingConstants.SIGN_UP_FAILURE,
                    payload: {error: res.data.error}
                })
            }
        }
    }
}