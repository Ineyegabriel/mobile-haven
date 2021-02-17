import initialState from './initialState';
import {ShopActionTypes} from '../ActionTypes'


const ShopReducer = (state = initialState, action) =>{
    switch(action.type){
        case ShopActionTypes.FETCH_PRODUCT:
            return{
                ...state,
            }
        default:
            return state;

    }
}

export default ShopReducer;