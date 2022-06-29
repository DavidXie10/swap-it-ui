import { createSlice } from "@reduxjs/toolkit";

const exchangeItemSlice = createSlice({
    name: 'exchangeItem',
    initialState: {
        itemToReceive: null,
        itemsToGive: [],
    },
    reducers: {
        addItemToReceive: (state, item) => {
            state.itemToReceive = item;
        },
        addItemsToGive: (state, item) => {
            state.itemsToGive.push(item)
        },
        clearExchange: (state) => {
            state.itemToReceive = null;
            state.itemsToGive = [];
        },
        removeItemToGive: (state, item) => {
            for(let i = 0; i < state.itemsToGive.length; i++){
                if (state.itemsToGive[i] == item){
                    state.itemsToGive.splice(i, 1);
                }
            }
        }
    }
})

export const { addItemToReceive, addItemsToGive, clearExchange, removeItemToGive } = exchangeItemSlice.actions

export default exchangeItemSlice.reducer;