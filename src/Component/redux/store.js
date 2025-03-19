import { createStore } from "redux";
import todoReducer from "../redux/reducer/Reducer";

export const store = createStore(todoReducer);
