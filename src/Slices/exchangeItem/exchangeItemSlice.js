import { createSlice } from "@reduxjs/toolkit";
import { exchangeItemReducers } from "./reducers";

const exchangeItemSlice = createSlice({
    name: 'exchangeItem',
    initialState: {
        itemToReceive: null,
        itemsToGive: [],
        errorMessage: ''
    },
    reducers: exchangeItemReducers,
})

export const { addItemToReceive, toggleItemToGive, clearGiveState, clearState} = exchangeItemSlice.actions

export default exchangeItemSlice.reducer;