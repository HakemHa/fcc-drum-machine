import { configureStore } from "@reduxjs/toolkit";
import drumReducer from "./slice";

const store = configureStore({
    reducer: { configs: drumReducer },  
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export default store;