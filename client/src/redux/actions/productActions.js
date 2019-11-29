import axios from 'axios'
import { GET_PRODUCT,PRODUCT_LOADING, GET_SPECS } from './typesOfAction'

export const getItems = () => dispatch => {
    dispatch(productLoading())
    axios.get('http://localhost:5000/processors')
    .then(res => dispatch({
        type: GET_PRODUCT,
        payload: res.data
    }))
}

export const getItemsId = (id) => dispatch => {
    dispatch(productLoading())
    axios.get('http://localhost:5000/processors/'+ id)
    .then(res => dispatch({
        type: GET_SPECS,
        payload: res.data
    }))
}


export const productLoading = () => {
    return{
        type: PRODUCT_LOADING
    }
}