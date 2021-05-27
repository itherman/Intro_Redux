//import logo from './logo.svg';
//import './App.css';
import React from 'react';
import { isElementOfType } from 'react-dom/test-utils';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './actions';

function App() {

  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  

  return (
    <div className="App">
      <h1>Counter: {counter} </h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement(5))}>-</button>
      {isLogged ? <h3>Valuable Info I shouldn't see.</h3> : ''}
    </div>
  );
}

export default App;
