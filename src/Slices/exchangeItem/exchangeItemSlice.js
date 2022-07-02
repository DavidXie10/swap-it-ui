import { createSlice } from "@reduxjs/toolkit";
import { getItem, onGetItemFullfiled, onGetItemRejected } from "./requests/getItem";
import { exchangeItemReducers } from "./reducers";

const exchangeItemSlice = createSlice({
    name: 'exchangeItem',
    initialState: {
        itemToReceive: null,
        itemsToGive: [],
        errorMessage: ''
    },
    reducers: exchangeItemReducers,
    extraReducers(builder) {
        builder
            .addCase(getItem.fulfilled, onGetItemFullfiled)
            .addCase(getItem.rejected, onGetItemRejected)
    }
})

export const { addItemToReceive, toggleItemToGive, clearGiveState, clearState} = exchangeItemSlice.actions

export default exchangeItemSlice.reducer;