import { createSlice } from "@reduxjs/toolkit";
import { getItem, onGetItemFullfiled, onGetItemRejected } from "./requests/getItem";

const exchangeItemSlice = createSlice({
    name: 'exchangeItem',
    initialState: {
        itemToReceive: null,
        itemsToGive: [],
        errorMessage: ''
    },
    reducers: {
        addItemToReceive: (state, item) => {
            state.itemToReceive = item.payload;
        },
        toggleItemToGive: (state, item) => {
            const indexItem = state.itemsToGive.findIndex((element) => element.id === item.payload.id);
            if (indexItem + 1) {
                state.itemsToGive.splice(indexItem, 1);
            } else {
                state.itemsToGive.push(item.payload);
            }
        }
    },
    extraReducers(builder) {
        builder
            .addCase(getItem.fulfilled, onGetItemFullfiled)
            .addCase(getItem.rejected, onGetItemRejected)
    }
})

export const { addItemToReceive, toggleItemToGive, clearExchange} = exchangeItemSlice.actions

export default exchangeItemSlice.reducer;