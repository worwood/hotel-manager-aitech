import { types } from "../types/types";

const initialState = {
    readyToDownload: false,
    readyToShow: false,
    readyToDownload2: false,
    readyToShow2: false,
    readyToDownload3: false,
    readyToShow3: false,
    data: [],
    dataRange: [],
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
            
        case types.informStateEnable2:
            
            return {
                ...state,
                readyToDownload2: true
            };
        case types.informStateDisable2:
            
            return {
                ...state,
                readyToDownload2: false
            };
        case types.informStateEnable3:
            
            return {
                ...state,
                readyToDownload3: true
            };
        case types.informStateDisable3:
            
            return {
                ...state,
                readyToDownload3: false
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
            
        case types.informReady2:
            
            return {
                ...state,
                readyToShow2: true
            };
        case types.informNotReady2:
            
            return {
                ...state,
                readyToShow2: false
            };
        
        case types.informReady3:
            
            return {
                ...state,
                readyToShow3: true
            };
        case types.informNotReady3:
            
            return {
                ...state,
                readyToShow3: false
            };
            
        case types.informSaveData:
            return {
                ...state,
                data: action.payload.data

            };
        case types.informSaveDataRange:
            return {
                ...state,
                dataRange: action.payload.data

            };
    
        default:
            return state;
    }
}