import thunkMiddleware from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./rootReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

function configureStore() {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunkMiddleware))
  );
  return store;
}

export default configureStore;
