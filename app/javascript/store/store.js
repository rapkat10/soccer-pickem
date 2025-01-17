import { createStore, applyMiddleware } from "redux"
import logger from "redux-logger"
import thunk from "redux-thunk"
import rootReducer from "../reducers/root_reducer.js"

const configureStore = (preloadedState = {}) => {
  if (process.env.NODE_ENV === "development") {
    return createStore(
      rootReducer,
      preloadedState,
      applyMiddleware(thunk, logger)
    );
  } else {
    return createStore(rootReducer, preloadedState, applyMiddleware(thunk));
  }
};
export default configureStore;