import { types } from "../types/types";

const initialState = {
    loading: false,
    errorMsg: '',
}

export const viewReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.viewStartLoading:
            
            return {
                ...state,
                loading: true
            };
        case types.viewFinishLoading:
            
            return {
                ...state,
                loading: false
            };
    
        default:
            return state;
    }
}