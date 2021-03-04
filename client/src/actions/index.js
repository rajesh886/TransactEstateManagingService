import axios from 'axios'; //used to make ajax request
import { FETCH_USER, FETCH_DEVICE } from './types';


//fetchUser is a action creater
export const fetchUser =() => async dispatch => {
    
    //this is the action
    const res = await axios.get('/api/current_user');  
    // we want to dispatch only after we get response from the above api request.
    //dispatch function 
    dispatch({type: FETCH_USER, payload: res.data});
    
};

export const fetchDevice = () => async dispatch =>{
 const res = await axios.get('api/deviceprofiles/online');
 dispatch({type: FETCH_DEVICE, payload:res.data});
};



