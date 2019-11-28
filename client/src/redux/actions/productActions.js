import axios from 'axios'
import { GET_PRODUCT,PRODUCT_LOADING } from './typesOfAction'

export const getItems = () => dispatch => {
    dispatch(productLoading())
    axios.get('http://localhost:5000/processors')
    .then(res => dispatch({
        type: GET_PRODUCT,
        payload: res.data
    }))
}

export const productLoading = () => {
    return{
        type: PRODUCT_LOADING
    }
}