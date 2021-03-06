import { createSlice } from '@reduxjs/toolkit';
import { getMyItems, onGetMyItemsFullfiled, onGetMyItemsRejected } from './requests/getMyItems';

const myItemsSlice = createSlice({
    name: 'myItems',
    initialState: {
        myItems: [],
        success: true,
        errorMessage: '',
    },
    reducers: {
        clearMyItemsState: (state) => {
            state.myItems = [];
            state.success = true;
            state.errorMessage = '';
        },
        deleteSelectedItem: (state, item) => {
            const indexItem = state.myItems.findIndex((element) => element.itemId === item.payload.itemId);
            state.myItems.splice(indexItem, 1);
        },
    },
    extraReducers(builder) {
        builder
            .addCase(getMyItems.fulfilled, onGetMyItemsFullfiled)
            .addCase(getMyItems.rejected, onGetMyItemsRejected)
    }
})

export const { clearMyItemsState, deleteSelectedItem } = myItemsSlice.actions

export default myItemsSlice.reducer;