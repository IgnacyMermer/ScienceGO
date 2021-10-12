import {forumConstants} from '../constants/forumConstants';

const initialState = {
    posts: [],
    loading: false,
    error: null
};

const postsReducer = (state=initialState, action)=>{
    switch(action.type){
        case forumConstants.POST_GET_REQUEST:{
            state={
                ...state,
                loading: true, 
                error: null
            }
            break;
        }
        case forumConstants.POST_GET_SUCCESS:{
            state={
                ...state,
                posts: action.payload,
                loading: false,
                error: null
            }
            break;
        }
        case forumConstants.POST_GET_FAILURE:{
            state={
                ...state,
                loading: false,
                error: action.payload
            }
            break;
        }
        case forumConstants.POST_SEND_SUCCESS:{
            state={
                ...state,
                posts: [...state.posts, action.payload],
                loading: false,
                error: null
            }
            break;
        }
        case forumConstants.POST_SEND_FAILURE:{
            state={
                ...state,
                loading: false,
                error: action.payload
            }
            break;
        }
    }
    return state;
}

export default postsReducer;