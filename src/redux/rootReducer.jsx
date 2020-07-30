import {combineReducers} from 'redux'
import cakeReducer from './cakeReducer'
import iceReducer from './iceReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({
    cake: cakeReducer,
    ice: iceReducer,
    users: userReducer
})


export default rootReducer