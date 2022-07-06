import { createSlice } from '@reduxjs/toolkit';
import { exchangeItemReducers } from './reducers';
import { exchange, onExchangeItemFullfiled, onExchangeItemRejected } from './requests/exchange';

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