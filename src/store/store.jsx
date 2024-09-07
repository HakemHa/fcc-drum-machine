import { configureStore } from "@reduxjs/toolkit";
import markReducer from "./slice";

const store = configureStore({ reducer: { configs: markReducer } });

export default store;