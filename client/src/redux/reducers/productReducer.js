
import { GET_PRODUCT, PRODUCT_LOADING, GET_SPECS } from '../actions/typesOfAction'

const initialState = {
    products: [],
    viewSpecs:[],
    loading: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_PRODUCT:
            return {
                ...state,
                products: action.payload,
            }
        case GET_SPECS:
            return {
                ...state,
                viewSpecs: action.payload,
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