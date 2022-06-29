import { createSlice } from "@reduxjs/toolkit";

const exchangeItemSlice = createSlice({
    name: 'exchangeItem',
    initialState: {
        itemToReceive: 0,
        itemsToGive: [],
        count: 0
    },
    reducers: {
        addItemToReceive: (state, item) => {
            state.itemToReceive = item.payload;
        },
        toggleItemToGive: (state, item) => {
            let indexItem = state.itemsToGive.findIndex(element => element === item.payload);
            if (indexItem + 1) {
                state.itemsToGive.splice(indexItem, 1);
            } else {
                state.itemsToGive.push(item.payload)
            }
        },
        clearExchange: (state) => {
            state.itemToReceive = null;
            state.itemsToGive = [];
        },
        increment: (state) => {
            state.count++;
        }
    }
})

export const { addItemToReceive, toggleItemToGive, clearExchange, increment } = exchangeItemSlice.actions

export default exchangeItemSlice.reducer;