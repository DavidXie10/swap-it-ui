import { createSlice } from "@reduxjs/toolkit";
import { exchangeItemReducers } from "./reducers";
import { exchange } from "./requests/exchange";

const onExchangeItemFullfiled = (state, action) => {
    if (action.payload.error) {
        state.success = false;
        state.errorMessage = action.payload.message;
    } else {
        state.success = true;
        state.errorMessage = '';
    }
};

const onExchangeItemRejected = (state) => {
    state.itemToReceive = null;
    state.itemsToGive = [];
    state.errorMessage = '';
    state.success = false;
}

const exchangeItemSlice = createSlice({
    name: 'exchangeItem',
    initialState: {
        itemToReceive: null,
        itemsToGive: [],
        errorMessage: '',
        success: false
    },
    reducers: exchangeItemReducers,
    extraReducers(builder){
        builder
            .addCase(exchange.fulfilled, onExchangeItemFullfiled)
            .addCase(exchange.rejected, onExchangeItemRejected)
    }
})

export const { addItemToReceive, toggleItemToGive, clearGiveState, clearState, setSucess} = exchangeItemSlice.actions

export default exchangeItemSlice.reducer;