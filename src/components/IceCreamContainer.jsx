import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addIce, removeIce } from '../redux/iceActions'

const IceCreamContainer = () => {
    const num = useSelector(state=>state.ice.icecream)
    const dispatch = useDispatch()

    function dec(){
        dispatch(removeIce())
    }
    function add(){
        dispatch(addIce())
    }
    return (
        <div>
            <h2>Cake number {num}</h2>
            <button onClick={dec}>Buy ice</button>
            <button onClick={add}>Add ice</button>
        </div>
    )
}

export default IceCreamContainer
