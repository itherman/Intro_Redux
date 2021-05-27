import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import allReducers from './reducers';
import { Provider } from 'react-redux';

//Creates a Redux Store:
const store = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//Connects the current global state ('the redux store') to the App:
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
);











// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();









// Cave man method below......

// import {createStore} from 'redux';

// //let store = createStore(reducer)

// //Store: Globalized State

// //Action: Increment
// const increment = () => {
//   return {
//     type: 'Increment'
//   }
// }

// const decrement = () => {
//   return {
//     type: 'Decrement'
//   }
// }


// //Reducer:
// const counter = (state = 0, action) => {
//   switch(action.type){
//     case "Increment":
//       return state + 1;
//     case "Decrement":
//       return state - 1;
//   }
// }

// let store = createStore(counter);

// //Display in Console:
// store.subscribe(() => console.log(store.getState()));

// //Dispatch
// store.dispatch(increment());
// store.dispatch(decrement());
// store.dispatch(decrement());


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );