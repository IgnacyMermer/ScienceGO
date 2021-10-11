import { chatConstants } from "../constants/chatConstants";

const initialState={
    messages: [],
    loading: false,
};

const messageReducer=(state=initialState, action)=>{
    
    switch(action.type){
        case chatConstants.MESSAGE_SEND_REQUEST:{
            state={
                ...state,
                loading: true,
            }
            break;
        }
        case chatConstants.MESSAGE_SEND_SUCCESS:{
            state={
                ...state,
                messages: [...state.messages, action.payload],
                loading: false,
            }
            break;
        }
        case chatConstants.MESSAGE_SEND_FAILURE:{
            state={
                ...state,
                loading: false,
                
            }
            break;
        }
        case chatConstants.MESSAGE_GET_REQUEST:{
            state={
                ...state,
                loading: true,
                
            }
            break;
        }
        case chatConstants.MESSAGE_GET_SUCCESS:{
            state={
                ...state,
                messages: action.payload,
                loading: false,
            }
            break;
        }
        case chatConstants.MESSAGE_GET_FAILURE:{
            state={
                ...state,
                loading: false,
                
            }
            break;
        }
    }
    return state;
}

export default messageReducer;