import { FETCH_DEVICE, FETCH_CATEGORY, FETCH_ONLINECOUNT, FETCH_OFFLINECOUNT,FETCH_HISTORY } from '../actions/types';

const initialState = {
    devicesInfos: [],
    onlineCount: null,
    offlineCount: null,
    devicesCategory: [],
    devicesHistory: [],
}

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        //if the action is fetch_device send the payload
        case FETCH_DEVICE:
            return {
                ...state,
                devicesInfos: payload
            };
        case FETCH_ONLINECOUNT:
            return {
                ...state,
                onlineCount: payload
            };
        case FETCH_OFFLINECOUNT:
            return {
                ...state,
                offlineCount: payload
            };
        case FETCH_CATEGORY:
            return {
                ...state,
                devicesCategory: payload
            };
        case FETCH_HISTORY:
            return {
                ...state,
                devicesHistory: payload
             };
        default:
            return state;
    }
}