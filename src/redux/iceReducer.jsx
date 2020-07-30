import {ADD_ICE} from './iceActions'
import {REMOVE_ICE} from './iceActions'

const initialState = {
    icecream: 20
}


const iceReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_ICE":
            return {...state, icecream: state.icecream + 1}
        case "REMOVE_ICE":
            return {...state, icecream: state.icecream - 1}
    
        default:
            return state;
    }
}

export default iceReducer