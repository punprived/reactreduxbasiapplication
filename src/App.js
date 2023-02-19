import React from 'react'
import { incrNubmer, decrNubmer } from './actions/index'
import { useSelector, useDispatch} from 'react-redux'
const App = () => {
  const myInitialState = useSelector((state)=>state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <>
      <div className='container mt-5'>
        <button className='btn btn-success' onClick={()=> dispatch(incrNubmer())}>+</button>
        <input type="text" name="incrNubmer" value={myInitialState} />
        <button className='btn btn-warning' onClick={()=>dispatch(decrNubmer())}>-</button>
      </div>
    </>
  )
}

export default App
