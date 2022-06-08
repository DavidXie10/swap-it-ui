import { createAsyncThunk } from "@reduxjs/toolkit";

export const postLogin = createAsyncThunk('users/postLogin', async(credentials) => {
    /*const loginFetch = await fetch('http://localhost:3001/users/login', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({
            email: credentials.username,
            password: credentials.password,
        }),
    });*/

    // const userData = await loginFetch.json();
    let loginFetch = {};
    let userData = {};
    const testUser = {
        username: 'David',
        password: '1234'
    }
    if(testUser.username === credentials.username && testUser.password === credentials.password){
        loginFetch = {
            status: 200,
        }
        userData = {
            username: 'David',
            password: '1234',
            email: 'davidxieli@gmail.com'
        }
    }else{
        loginFetch.status = 400;
    }

    if (loginFetch.status === 200){
        return userData;
    }else{
        return {
            error: true,
            message: "Un grave error de prueba",
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