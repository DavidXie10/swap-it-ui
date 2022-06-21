import { createSlice } from "@reduxjs/toolkit";
import { onPostLoginFulfilled, onPostLoginRejected, postLogin } from "./requests/postLogin";
import { onPatchUserFulfilled, onPatchUserRejected, patchUser } from "./requests/patchUser";

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
        }
    },
    extraReducers (builder){
        builder
            .addCase(postLogin.fulfilled, onPostLoginFulfilled)
            .addCase(postLogin.rejected, onPostLoginRejected)
            .addCase(patchUser.fulfilled, onPatchUserFulfilled)
            .addCase(patchUser.rejected, onPatchUserRejected)
    }
})

export const { logout } = userSlice.actions;

export default userSlice.reducer;