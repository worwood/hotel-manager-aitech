import { types } from "../types/types";

const initialState = {
    modalOpen: false,
    modalPage: 1,
}

export const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.uiOpenModal:
            
            return {
                ...state,
                modalOpen: true
            };
        case types.uiCloseModal:
            
            return {
                ...state,
                modalOpen: false
            };
        case types.uiPage:
            
            return {
                ...state,
                modalPage: action.payload.page
            };


    
        default:
            return state;
    }
}