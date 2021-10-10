import { signingConstants } from "../constants/signingConstants";

const initState = {
    token: null,
    user: {
        firstName: '',
        lastName: '',
        email: '',
        picture: '',
    },
    authenticate: false,
    authenticating: false,
    loading: false,
    error: null,
    message: ''
};

const signingReducer=(state=initState, action)=>{
    switch(action.type){
        case signingConstants.SIGN_IN_REQUEST:{
            state={
                ...state,
                authenticating: true,
            }
            break;
        }
        case signingConstants.SIGN_IN_SUCCESS:{
            state={
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                authenticate: true,
                authenticating: false
            }
            break;
        }
        case signingConstants.SIGN_OUT_SUCCESS:{
            state={
                ...state,
                user: {
                    firstName: '',
                    lastName: '',
                    email: '',
                    picture: '',
                },
                token: null,
                authenticate: false,
                authenticating: false
            }
            break;
        }
        case signingConstants.SIGN_OUT_FAILURE:{
            state={
                ...state,
                user: {
                    firstName: '',
                    lastName: '',
                    email: '',
                    picture: '',
                },
                token: null,
                authenticate: false,
                authenticating: false
            }
            break;
        }
        case signingConstants.SIGN_OUT_REQUEST:{
            state={
                ...state,
                authenticating: true
            }
            break;
        }

    }
    return state;
}

export default signingReducer;