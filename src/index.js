import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import rootReducer from "./reducers/index";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { addCharacterById } from "./actions/index";

const store = createStore(rootReducer);
console.log("store.getState()", store.getState());
//subscribe to see store everytime it is updated
store.subscribe(() => console.log("store", store.getState()));
store.dispatch(addCharacterById(2));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
