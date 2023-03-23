import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const LogIn = () => {
  const dispatchFunc = useDispatch();
  const isLoggedIn = useSelector((state)=> state.isLoggedIn);
  const [user, setUser] = useState('');
 
  const handleInputChange = (e) => {
    setUser(e.target.value);
  }

  const submit = (e) => {
    e.preventDefault();
    dispatchFunc({type: 'logIn'})
  }

  return (
    !isLoggedIn && <form onSubmit={submit} >
      <label htmlFor="email">Email</label>
      <input id="email" name="email" value={user} onChange={handleInputChange} />
      <button type="submit">Log in</button>
    </form>
  )
}

export default LogIn;
