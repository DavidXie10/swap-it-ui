import { createSlice } from "@reduxjs/toolkit";
import { postLogin } from "../user/requests/postLogin";

const appSlice = createSlice({
    name: 'app',
    initialState: {
        loading: false
    },
    reducers: {
        toggleLoading: (state) => {
            state.loading = !state.loading;
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
    }
})

export const {toggleLoading} = appSlice.actions;

export default appSlice.reducer;