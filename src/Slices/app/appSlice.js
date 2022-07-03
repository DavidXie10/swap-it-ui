import { createSlice } from "@reduxjs/toolkit";
import { postLogin } from "../user/requests/postLogin";
import { updateUser } from "../user/requests/updateUser"; 
import { createItem } from "../item/requests/createItem";
import { editItem } from "../item/requests/editItem"; 
import { getMyItems } from "../myItems/requests/getMyItems";

const appSlice = createSlice({
    name: 'app',
    initialState: {
        loading: false
    },
    reducers: {
        toggleLoading: (state) => {
            state.loading = !state.loading;
        },
        setLoading: (state) => {
            state.loading = true;
        },
        unsetLoading: (state) => {
            state.loading = false;
        }
    },
    extraReducers(builder){
        builder
            .addCase(postLogin.pending, (state) => {
                state.loading = true;
            })
            .addCase(postLogin.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(postLogin.rejected, (state) => {
                state.loading = false;
            })
            .addCase(createItem.pending, (state) => {
                state.loading = true;
            })
            .addCase(createItem.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(createItem.rejected, (state) => {
                state.loading = false;
            })
            .addCase(editItem.pending, (state) => {
                state.loading = true;
            })
            .addCase(editItem.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(editItem.rejected, (state) => {
                state.loading = false;
            })
            .addCase(updateUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(updateUser.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(updateUser.rejected, (state) => {
                state.loading = false;
            })
            .addCase(getMyItems.pending, (state) => {
                state.loading = true;
            })
            .addCase(getMyItems.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(getMyItems.rejected, (state) => {
                state.loading = false;
            })
    }
})

export const {toggleLoading, setLoading, unsetLoading} = appSlice.actions;

export default appSlice.reducer;