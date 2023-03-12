import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {selectReducer2Val, addVal, removeVal, addInputAmount} from './reducer2Slice'

function Reducer2() {

  const selectReducer2Val1 = useSelector(selectReducer2Val);
  const dispatch = useDispatch();
  const [inputVal, setInputVal] = useState("3");
  const inputValNum = Number(inputVal) || 0;
  return (
    <div>
    <p>-----------------------------------------------------------------------------</p>
    <h2 className='bg-primary text-white p-3'>Reducer2</h2>
    <span className='fs-1 border border-dark p-3 d-block'>{selectReducer2Val1}</span>
    <input className="" maxLength={3} value={inputVal} onChange={(e)=>{ setInputVal(e.target.value) }} />
    
    <button className='btn btn-warning p-3 m-3' onClick={()=> {dispatch(addVal())}}>Add Number</button>
    
    <button  className='btn btn-warning p-3' onClick={() => dispatch(removeVal())}>Remove Number</button>
    
    <button  className='btn btn-warning p-3' onClick={() => dispatch(addInputAmount(inputValNum))}>Add Input Amount</button>

    </div>
    
  )
}

export default Reducer2