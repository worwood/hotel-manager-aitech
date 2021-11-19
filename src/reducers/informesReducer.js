import { types } from "../types/types";

const initialState = {
    readyToDownload: false,
    readyToShow: false,
    data: [],
}

export const informesReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.informStateEnable:
            
            return {
                ...state,
                readyToDownload: true
            };
        case types.informStateDisable:
            
            return {
                ...state,
                readyToDownload: false
            };
            
        case types.informReady:
            
            return {
                ...state,
                readyToShow: true
            };
        case types.informNotReady:
            
            return {
                ...state,
                readyToShow: false
            };
            
        case types.informSaveData:
            console.log(action.payload.data)
            return {
                ...state,
                data: action.payload.data

            };
    
        default:
            return state;
    }
}