
import { GET_PRODUCT, PRODUCT_LOADING } from '../actions/typesOfAction'

const initialState = {
    products: [],
    loading: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_PRODUCT:
            return {
                ...state,
                products: action.payload,
            }
        case PRODUCT_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state
    }
}