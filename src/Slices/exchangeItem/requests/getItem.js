import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUsers = createAsyncThunk('usuarios/getUsers', async (params, { getState }) => {
    const state = getState();
    const usersFetch = await fetch('http://localhost:7500/users', {
        headers: {
            "Authorization": `Bearer ${state.user.user.token}`,
            "Content-type": "application/json",
        },
    });
    const usersData = await usersFetch.json();
    console.log("usersDate: ", usersData);
    if (usersFetch.status === 200) {
        return usersData;
    } else {
        return {
            error: true,
            message: usersData.error.message,
        }
    }
});

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


export const getItem = createAsyncThunk('items/getItem', async (item) => {
    const itemFetch = await fetch(`http://localhost:8000/items/${item.id}`);
    const itemData = await itemFetch.json();
    console.log("itemData: ", itemData);
    if (itemFetch.status === 200) {
        return itemData;
    } else if (itemFetch.status === 404 || itemFetch.status === 500) {
        return {
            error: true,
            message: itemData.error.message,
        }
    }
});