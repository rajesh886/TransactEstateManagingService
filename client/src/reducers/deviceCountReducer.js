import { FETCH_ONLINECOUNT} from '../actions/types';


export default function(state = null, action) {
    console.log(action);
    switch(action.type) {
        //if the action is fetch_user send the payload
        case FETCH_ONLINECOUNT:
            return action.payload;
        default:
            return state;
    }
}