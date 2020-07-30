import React, { useEffect } from 'react'
import { fetchUsers } from '../redux/userActions'
import { useSelector, useDispatch } from 'react-redux'

const UserContainer = () => {
    const kkk = useSelector(state=>state.users)
    console.log(kkk);
    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(fetchUsers())
    },[])
    
    return kkk.loading ? (<h2>Loading...</h2>) : kkk.error ? ( <h2>{kkk.error}</h2> ) : (
            <div>
                <h2>User List</h2>
                <div>
                    {kkk && kkk.users && kkk.users.map((user, i)=><p key={i}>{user.name}</p>)} 
                </div>
            </div>
    )
    
}

export default UserContainer
