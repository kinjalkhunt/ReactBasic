// Redux thunk is middleware that allows you towrite action creators that return a function instead of an action. yhis function can perform asynchronuns logic (like api requests)

// import { createStore } from "redux";
// import todoReducer from "../redux/reducer/Reducer";

// export const store = createStore(todoReducer);



// redux/store.js
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import todoReducer from "../redux/reducer/Reducer";

export const store = createStore(todoReducer, applyMiddleware(thunk));
