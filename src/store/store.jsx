import { configureStore } from "@reduxjs/toolkit";
import drumReducer from "./slice";

const store = configureStore({ reducer: { configs: drumReducer } });

export default store;