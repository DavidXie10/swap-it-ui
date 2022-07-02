import { createSlice } from "@reduxjs/toolkit";
import { getMyItems, onGetMyItemsFullfiled, onGetMyItemsRejected } from "./requests/getMyItems";

const myItemsSlice = createSlice({
    name: 'myItems',
    initialState: {
        myItems: []
    },
    reducers: {
        clearMyItemsState: (state) => {
            state.myItems = [];
        },
    },
    extraReducers(builder) {
        builder
            .addCase(getMyItems.fulfilled, onGetMyItemsFullfiled)
            .addCase(getMyItems.rejected, onGetMyItemsRejected)
    }
})

export const { clearMyItemsState } = myItemsSlice.actions

export default myItemsSlice.reducer;