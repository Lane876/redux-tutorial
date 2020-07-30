import {ADD_ICE} from './cakeTypes'
import {REMOVE_ICE} from './cakeTypes'



export const addIce = () => {
    return ({
        type: 'ADD_ICE'
    })
}

export const removeIce = () => {
    return({
        type: "REMOVE_ICE"
    })
}