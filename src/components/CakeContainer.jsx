import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake, addCake } from '../redux/cakeActions'

const CakeContainer = () => {
    const num = useSelector(state=>state.cake.numOfCakes)
    const dispatch = useDispatch()

    function dec(){
        dispatch(buyCake())
    }
    function add(){
        dispatch(addCake())
    }
    return (
        <div>
            <h2>Cake number {num}</h2>
            <button onClick={dec}>Buy cake</button>
            <button onClick={add}>Add cake</button>
        </div>
    )
}

export default CakeContainer
