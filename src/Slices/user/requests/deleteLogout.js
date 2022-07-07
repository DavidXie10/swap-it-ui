import { createAsyncThunk } from '@reduxjs/toolkit';

export const deleteLogout = createAsyncThunk('users/deleteLogout', async (params, {getState}) => {
    const state = getState();

    const logoutFetch = await fetch(`${process.env.REACT_APP_API_URL}/users/${state.user.user.id}/logout`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${state.user.user.token}`,
            'Content-type': 'application/json',
        },
    });

    const logoutData = await logoutFetch.json();

    if (logoutFetch.status === 200){
        return logoutData;
    }else{
        return {
            error: true,
            message: logoutData.message,
        }
    }
})

export const onDeleteLogoutFulfilled = (state, action) => {
    if (action.payload.error){
        state.errorMessage = action.payload.message;
    }else{
        state.user = null;
        state.isLoggedIn = false;
        state.errorMessage = '';
        state.isUpdated = false;
    }
}

export const onDeleteLogoutRejected = (state) => {
    state.errorMessage = 'Petición para cerrar sesión rechazada'
}