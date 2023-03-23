import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const SaveList = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn)
  const dispatchFunc = useDispatch();

  const save = () => {
    dispatchFunc({ type: 'save' })
  } 
  const clear = () => {
    dispatchFunc({ type: 'clear' })
  }
  return (
    <div className='save'>
      {!isLoggedIn && <p>You must be logged in to save the list.</p>}         
      {isLoggedIn && <button onClick={save}>SAVE</button>}
      {isLoggedIn && <button onClick={clear}>CLEAR</button>}
    </div>
  )
}


export default SaveList