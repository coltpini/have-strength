import React from "react";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import ReactDOM from "react-dom";
import AppLayout from "./components/appLayout/appLayout";

// import { hydrate } from "react-dom";
// import { createStore } from "redux";
// import { Provider } from "react-redux";

ReactDOM.render(<AppLayout />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// TODO: With Redux for future with SSR.

// // Grab the state from a global variable injected into the server-generated HTML
// const preloadedState = window.__PRELOADED_STATE__;

// // Allow the passed state to be garbage-collected
// delete window.__PRELOADED_STATE__;

// // Create Redux store with initial state
// const store = createStore(counterApp, preloadedState);

// hydrate(
//   <Provider store={store}>
//     <AppLayout />
//   </Provider>,
//   document.getElementById("root")
// );
