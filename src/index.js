import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import { Provider } from 'react-redux'
// import { createStore } from 'redux'


// import {addUser} from './redux/actionCreator.js'

// const store = createStore()
// const rootReducer = combineReducers({
//     // products,
//     // specialPosts
// });

// const store = createStore( rootReducer, applyMiddleware( thunkMiddleware ));

// ReactDOM.render(<Provider store={store}>
//     <App />
//   </Provider>, document.getElementById("root"));
ReactDOM.render(
    <App />
  , document.getElementById("root"));