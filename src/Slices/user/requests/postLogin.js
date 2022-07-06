import { createAsyncThunk } from '@reduxjs/toolkit';
import Mixpanel from '../../../services/mixpanel';

export const postLogin = createAsyncThunk('users/postLogin', async(credentials) => {
    const loginFetch = await fetch(`${process.env.REACT_APP_API_URL}/users/login`, {
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
        Mixpanel.track(Mixpanel.TYPES.SUCCESSFULLY_LOGIN);
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
        state.isUpdated = false;
        state.user = null;
        state.errorMessage = action.payload.message;
    }else{
        Mixpanel.identify(action.payload.id);
        Mixpanel.people.set({
            $name: action.payload.fullName,
            $email: action.payload.email,
            location: action.payload.location,
            phoneNumber: action.payload.phoneNumber
        });
        state.isLoggedIn = true;
        state.isUpdated = false;
        state.user = action.payload;
        state.errorMessage = '';
    }
}

export const onPostLoginRejected = (state) => {
    state.isLoggedIn = false;
    state.isUpdated = false;
    state.user = null;
}