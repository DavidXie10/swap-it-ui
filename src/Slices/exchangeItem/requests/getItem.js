import { createAsyncThunk } from "@reduxjs/toolkit";

export const getItem = createAsyncThunk('items/getItem', async (item) => {
    const itemFetch = await fetch(`http://localhost:8000/items/${item.id}`, {
        method: 'GET'
    });
    const itemData = await itemFetch.json();
    console.log("itemData: ", itemData);
    if (itemFetch.status === 200) {
        return itemData;
    } else if (itemFetch.status === 404 || itemFetch.status === 500) {
        return {
            error: true,
            message: itemData.error.message,
        }
    }
});

export const onGetItemFullfiled = (state, action) => {
    if (action.payload.error) {
        state.itemToReceive = null;
        state.errorMessage = action.payload.message;
    } else {
        state.itemToReceive = action.payload;
    }
};

export const onGetItemRejected = (state) => {
    state.itemToReceive = null;
}