import axiosInstance from "../../helpers/axios";
import { forumConstants } from "../constants/forumConstants";

export const getPosts=()=>{
    return async dispatch=>{
        try{
            
            dispatch({type: forumConstants.POST_GET_REQUEST});

            const res = await axiosInstance.get('/posts');
            
            if(res.status==200){
                dispatch({
                    type: forumConstants.POST_GET_SUCCESS,
                    payload: res.data.posts
                });
            }
            else{
                dispatch({
                    type: forumConstants.POST_GET_FAILURE,
                    payload: res.data.error,
                })
            }
        }
        catch(e){
            console.log(e);
        }
    }
}

export const addPost=(title, content, user)=>{
    return async dispatch=>{
        try{

            dispatch({type: forumConstants.POST_SEND_REQUEST});

            const res = await axiosInstance.post('/post', {
                title,
                content, 
                user
            });
            if(res.status===200){
                dispatch({
                    type: forumConstants.POST_SEND_SUCCESS,
                    payload: res.data.post
                })
            }
            else{
                dispatch({
                    type: forumConstants.POST_SEND_FAILURE,
                    payload: res.data.error
                })
            }
        }
        catch(e){
            console.log(e);
        }
    }
}

export const addAnswerToPost = (content, user, post)=>{
    return async dispatch=>{
        try{

            const res = await axiosInstance.post('/answerpost', {
                content, 
                user, 
                post
            });

            dispatch({type: forumConstants.POST_ANSWER_ADD_REQUEST});

            if(res.status==200){
                dispatch({
                    type: forumConstants.POST_ANSWER_ADD_SUCCESS,
                    payload: res.data
                });
            }
            else{
                dispatch({
                    type: forumConstants.POST_ANSWER_ADD_FAILURE,
                    payload: res.data.error
                });
            }
        }
        catch(e){
            console.log(e);
        }
    }
}