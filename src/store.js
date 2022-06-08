import { combineReducers, configureStore } from "@reduxjs/toolkit";
import appSlice from "./Slices/app/appSlice";
import userSlice from "./Slices/user/userSlice";

const reducers = combineReducers({
    app: appSlice,
    user: userSlice,
})

const store = configureStore({
    reducer: reducers,
});

export default store;
