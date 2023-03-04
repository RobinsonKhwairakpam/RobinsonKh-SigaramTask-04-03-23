import { ActionTypes } from "../constants/action-types";

export const productReducer = (state = [], action) => {
    switch(action.type){
        case ActionTypes.GET_PRODUCTS :
            return action.payload
        default :
            return state
    }
}