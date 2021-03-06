import { createAsyncThunk } from "@reduxjs/toolkit";

export const deleteItem = createAsyncThunk('items/:id', async (param,{getState}) => {
    const state = getState();
    const deleteItemFetch = await fetch(`${process.env.REACT_APP_API_URL}/items/${param.param}`, {
        method: 'DELETE',
        headers: {
            "Authorization": `Bearer ${state.user.user.token}`,
        },
    });
    let deleteItemData = await deleteItemFetch.json(); 
    if (deleteItemData.status === 204) {
        return deleteItemData;
    } else {
        return {
            error: true,
            message: deleteItemData.error.message,
        }
    }
});