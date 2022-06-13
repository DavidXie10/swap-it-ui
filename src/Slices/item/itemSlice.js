import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
    name: 'item',
    initialState: {
        success: true
    },
    reducers: {
        toggleSuccess: (state) => {
            state.success = !state.success;
        }
    }
})

export const { toggleSuccess } = itemSlice.actions;

export default itemSlice.reducer;