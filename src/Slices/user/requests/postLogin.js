import { createAsyncThunk } from "@reduxjs/toolkit";

export const postLogin = createAsyncThunk('users/postLogin', async(credentials) => {
    const loginFetch = await fetch('http://localhost:8000/users/login', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({
            email: credentials.email,
            password: credentials.password,
        }),
    });

    const userData = await loginFetch.json();

    if (loginFetch.status === 200){
        return userData;
    }else{
        return {
            error: true,
            message: userData.message,
        }
    }
})

export const onPostLoginFulfilled = (state, action) => {
    if (action.payload.error){
        state.isLoggedIn = false;
        state.user = null;
        state.errorMessage = action.payload.message;
    }else{
        state.isLoggedIn = true;
        state.user = action.payload;
    }
}

export const onPostLoginRejected = (state) => {
    state.isLoggedIn = false;
    state.user = null;
}