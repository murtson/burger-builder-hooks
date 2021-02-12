import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import burgerBuilderReducer from "./store/reducers/burgerBuilderReducer";
import orderReducer from "./store/reducers/orderReducer";
import authReducer from "./store/reducers/authReducer";

// Redux Middleware
// Behind the scene, thunk looks like our custom Middleware
/* const logger = (store) => {
  return (next) => {
    return (action) => {
      console.log("[Middleware] Dispatching", action);
      const result = next(action);
      console.log("[Middleware] Next State", store.getState());
      return result;
    };
  };
}; */

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  burgerBuilderReducer: burgerBuilderReducer,
  orderReducer: orderReducer,
  authReducer: authReducer,
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
