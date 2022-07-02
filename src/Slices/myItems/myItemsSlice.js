import { createSlice } from "@reduxjs/toolkit";
import { getMyItems, onGetMyItemsFullfiled, onGetMyItemsRejected } from "./requests/getMyItems";

const exchangeItemSlice = createSlice({
    name: 'myItems',
    initialState: {
        myItems: []
    },
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getMyItems.fulfilled, onGetMyItemsFullfiled)
            .addCase(getMyItems.rejected, onGetMyItemsRejected)
    }
})

export default exchangeItemSlice.reducer;