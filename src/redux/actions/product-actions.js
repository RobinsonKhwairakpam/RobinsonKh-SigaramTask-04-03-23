import fetchProducts from "../../api";
import { ActionTypes } from "../constants/action-types";

export const getProducts = () => async(dispatch) => {
    const data = await fetchProducts()
    
    const action = {
        type: ActionTypes.GET_PRODUCTS,
        payload: data
    }
    dispatch(action)
}
