import axios from 'axios'; //used to make ajax request
import { FETCH_USER, FETCH_DEVICE, FETCH_ONLINECOUNT,FETCH_OFFLINECOUNT } from './types';


//fetchUser is a action creater
export const fetchUser =() => async dispatch => {
    
    //this is the action
    const res = await axios.get('/api/current_user');  
    // we want to dispatch only after we get response from the above api request.
    //dispatch function 
    dispatch({type: FETCH_USER, payload: res.data});
    
};

export const fetchDevice = () => async dispatch =>{
 const res = await axios.get('/api/deviceprofiles');
 dispatch({type: FETCH_DEVICE, payload:res.data});
};

export const fetchOnlineCount = () => async dispatch =>{
    const res = await axios.get('/api/deviceprofiles/onlinecount');
    dispatch({type: FETCH_ONLINECOUNT, payload:res.data});
   };
export const fetchOfflineCount = () => async dispatch =>{
    const res = await axios.get('/api/deviceprofiles/offlinecount');
    dispatch({type: FETCH_OFFLINECOUNT, payload:res.data});
};


