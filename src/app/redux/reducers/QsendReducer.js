import { GET_COUNTRIES } from '../actions/QsendActions'

const initialState = [545]

const qsendReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COUNTRIES: {
            return [...action.payload]
        }
        default: {
            return [...state]
        }
    }
}
export default qsendReducer
