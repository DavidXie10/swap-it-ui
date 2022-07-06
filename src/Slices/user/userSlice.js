import { createSlice } from '@reduxjs/toolkit';
import { onPostLoginFulfilled, onPostLoginRejected, postLogin } from './requests/postLogin';
import { onUpdateUserFulfilled, onUpdateUserRejected, updateUser } from './requests/updateUser';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        isLoggedIn: false,
        errorMessage: '',
        isUpdated: false
    },
    reducers: {
        clearState: (state) => {
            state.isUpdated = false;
            state.errorMessage = '';
        },
        logout: (state) => {
            state.user = null;
            state.isLoggedIn = false;
            state.errorMessage = '';
            state.isUpdated = false;
        }
    },
    extraReducers (builder){
        builder
            .addCase(postLogin.fulfilled, onPostLoginFulfilled)
            .addCase(postLogin.rejected, onPostLoginRejected)
            .addCase(updateUser.fulfilled, onUpdateUserFulfilled)
            .addCase(updateUser.rejected, onUpdateUserRejected)
    }
})

export const { logout, clearState } = userSlice.actions;

export default userSlice.reducer;