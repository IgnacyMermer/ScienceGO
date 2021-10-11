import { chatConstants } from "../constants/chatConstants"
import axiosInstance from '../../helpers/axios';

export const sendMessage = (message) => {
    return async dispatch => {

        dispatch({type: chatConstants.MESSAGE_SEND_REQUEST});

        try {
            const res = await axiosInstance.post('/message', { payload: message });
            if (res.status === 200) {
                dispatch({
                    type: chatConstants.MESSAGE_SEND_SUCCESS,
                    payload: res.data.message,
                })
            }
            else {
                dispatch({
                    type: chatConstants.MESSAGE_SEND_FAILURE,
                    payload: res.data.error,
                })
            }
        }
        catch (e) {
            console.log(e);
        }

    };
}

export const getMessages = () => {
    return async dispatch => {

        dispatch({type: chatConstants.MESSAGE_GET_REQUEST});

        try {
            const res = await axiosInstance.get('/message');
            if (res.status === 200) {
                dispatch({
                    type: chatConstants.MESSAGE_GET_SUCCESS,
                    payload: res.data.messages,
                })
            }
            else {
                dispatch({
                    type: chatConstants.MESSAGE_SEND_FAILURE,
                    payload: res.data.error,
                })
            }
        }
        catch (e) {
            console.log(e);
        }
    };
}