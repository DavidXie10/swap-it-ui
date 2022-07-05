import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import appSlice from './Slices/app/appSlice';
import userSlice from './Slices/user/userSlice';
import exchangeItemSlice from './Slices/exchangeItem/exchangeItemSlice';
import itemSlice from './Slices/item/itemSlice';
import myItemsSlice from './Slices/myItems/myItemsSlice';

const reducers = combineReducers({
    app: appSlice,
    user: userSlice,
    exchangeItem: exchangeItemSlice,
    item: itemSlice,
    myItems: myItemsSlice,
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
