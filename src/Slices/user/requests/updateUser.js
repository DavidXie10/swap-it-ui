import { createAsyncThunk } from '@reduxjs/toolkit';

export const updateUser = createAsyncThunk('users/updateUser', async({user, photo}, { getState }) => {
    const state = getState();
    if(photo) {
        const formData = new FormData();
        formData.append('file', photo);
        const uploadFetch = await fetch(`${process.env.REACT_APP_API_URL}/uploads`, {
            headers: {
                'Authorization': `Bearer ${state.user.user.token}`,
            },    
            method: 'POST',
            body: formData,
        });

        const uploadData = await uploadFetch.json();

        user.photoUrl = uploadData.uploadedFiles[0].url;
    }
    
    const userFetch = await fetch(`${process.env.REACT_APP_API_URL}/users/${state.user.user.id}`, {
        method: 'PATCH',
        headers: {
            'Authorization': `Bearer ${state.user.user.token}`,
            'Content-type': 'application/json',
        },
        body: JSON.stringify(user),
    });

    const userData = await userFetch.json();

    if (userFetch.status === 200) {
        return {
            ...userData,
            token: state.user.user.token,
            id: state.user.user.id,
            password: state.user.user.password
        };
    } else {
        return {
            error: true,
            message: userData.message,
        }
    }
    
})

export const onUpdateUserFulfilled = (state, action) => {
    if (action.payload.error){
        state.errorMessage = action.payload.message;
        state.isLoggedIn = true;
        state.isUpdated = false;
    }else{
        state.errorMessage = '';
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isUpdated = true;
    }
}

export const onUpdateUserRejected = (state) => {
    state.isLoggedIn = true;
    state.isUpdated = false;
}