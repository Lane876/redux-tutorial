import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux/cakeActions'

const NewCakeContainer = () => {
    const [number, setNumber] = useState(1)
    const num = useSelector(state=>state.cake.numOfCakes)
    const dispatch = useDispatch()
    
    return (
        <div>
            <h2>Cake number {num}</h2>
            <input type="text" value={number} onChange={e=>setNumber(e.target.value)}/>
            <button onClick={()=>dispatch(buyCake(number))}>Buy {number} cakes</button>
        </div>
    )
}

export default NewCakeContainer
