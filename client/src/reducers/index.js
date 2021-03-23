import { combineReducers } from 'redux';
import authReducer from './authReducer';
import deviceReducer from './deviceReducer';
import deviceCountReducer from './deviceCountReducer';
import deviceOfflineCountReducer from './deviceOfflineReducer';

export default combineReducers({

    auth: authReducer,
    deviceInfo: deviceReducer,
    deviceOnlineCount: deviceCountReducer,
    deviceOfflineCount: deviceOfflineCountReducer
});
