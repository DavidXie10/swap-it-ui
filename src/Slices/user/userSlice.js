import { createSlice } from '@reduxjs/toolkit';
import { deleteLogout, onDeleteLogoutFulfilled, onDeleteLogoutRejected } from './requests/deleteLogout';
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
        invalidSession: (state) => {
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
            .addCase(deleteLogout.fulfilled, onDeleteLogoutFulfilled)
            .addCase(deleteLogout.rejected, onDeleteLogoutRejected)
    }
})

export const { clearState, invalidSession } = userSlice.actions;

export default userSlice.reducer;