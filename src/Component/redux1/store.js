import { createStore } from "redux";
import { CountReducer } from "./reducer/Reducer";

export const store = createStore(CountReducer)