import { createSlice } from "@reduxjs/toolkit";
import { itemReducers } from "./reducers";
import { createItem } from "./requests/createItem";
import { editItem } from "./requests/editItem"

const onProcessedItemFullfiled = (state, action) => {
    if (action.payload.error) {
        state.success = false;
        state.item = null;
        state.errorMessage = action.payload.message;
    } else {
        state.success = true;
        state.item = action.payload;
    }
};

const onProcessedItemRejected = (state) => {
    state.success = false;
    state.item = null;
}

const itemSlice = createSlice({
    name: 'item',
    initialState: {
        item: null,
        success: false,
        errorMessage: '',
    },
    reducers: itemReducers,
    extraReducers(builder){
        builder
            .addCase(createItem.fulfilled, onProcessedItemFullfiled)
            .addCase(createItem.rejected, onProcessedItemRejected)
            .addCase(editItem.fulfilled, onProcessedItemFullfiled)
            .addCase(editItem.rejected, onProcessedItemRejected)
    }
})

export const { toggleSuccess } = itemSlice.actions;

export default itemSlice.reducer;