import axios from 'axios'

export const GET_COUNTRIES = 'GET_COUNTRIES'
export const GET_CURRENCY = 'GET_CURRENCY'

export const getCountries = () => {
    return (dispatch) => {
        axios.get('/qsend-api/v1/currency/pair').then((res) => {
            dispatch({
                type: GET_COUNTRIES,
                payload: res.data,
            })
        })
    }
}

export const getCurrency = (dispatch) => {
    axios.get('/currency/pair').then((res) => {
        dispatch({
            type: GET_CURRENCY,
            payload: res.data,
        })
    })
}
