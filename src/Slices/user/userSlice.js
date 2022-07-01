import { createSlice } from "@reduxjs/toolkit";
import { onPostLoginFulfilled, onPostLoginRejected, postLogin } from "./requests/postLogin";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        isLoggedIn: false,
        errorMessage: "",
    },
    reducers: {
        logout: (state) => {
            state.user = null;
            state.isLoggedIn = false;
            state.errorMessage = '';
        }
    },
    extraReducers (builder){
        builder
            .addCase(postLogin.fulfilled, onPostLoginFulfilled)
            .addCase(postLogin.rejected, onPostLoginRejected)
    }
})

export const { logout } = userSlice.actions;

export default userSlice.reducer;