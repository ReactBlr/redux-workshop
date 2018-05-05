import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";

export default function configureStore() {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    rootReducer,
    localStorage.getItem("key"),
    composeEnhancers(applyMiddleware(thunk))
  );
  store.subscribe(() => {
    const state = store.getState();
    localStorage.setItem("key", JSON.stringify(state));
  });

  console.log(store);

  return store;
}
