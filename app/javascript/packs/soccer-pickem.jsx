import React from "react";
import ReactDOM from "react-dom";
import configureStore from "../store/store";
import Root from "../component/root";

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        user: { [window.currentUser.id]: window.currentUser },
      },
    };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});