import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'
import { persistReducer } from "redux-persist";
import appSlice from './Slices/app/appSlice';
import userSlice from './Slices/user/userSlice';

const reducers = combineReducers({
    app: appSlice,
    user: userSlice,
})

const rootPersistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(rootPersistConfig, reducers);  

const store = configureStore({
    reducer: persistedReducer,
});

export default store;
