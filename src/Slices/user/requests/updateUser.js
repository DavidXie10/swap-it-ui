import { createAsyncThunk } from "@reduxjs/toolkit";

export const updateUser = createAsyncThunk('users/updateUser', async({user, photo}, { getState }) => {
    const state = getState();
    if(photo) {
        const formData = new FormData();
        formData.append('file', photo);
        const uploadFetch = await fetch('http://localhost:8000/uploads', {
            headers: {
                "Authorization": `Bearer ${state.user.user.token}`,
            },    
            method: 'POST',
            body: formData,
        });

        const uploadData = await uploadFetch.json();
        user.photoUrl = uploadData.url;
    }

    const userFetch = await fetch(`http://localhost:8000/users/${state.user.user.id}`, {
        method: 'PATCH',
        headers: {
            "Authorization": `Bearer ${state.user.user.token}`,
            "Content-type": "application/json",
        },
        body: JSON.stringify(user),
    });

    const userData = await userFetch.json();

    if (userFetch.status === 200) {
        console.log('200');
        console.log(userData);
        return {
            ...userData,
            token: state.user.user.token,
            id: state.user.user.id,
            password: state.user.user.password
        };
    } else {
        console.log('ERROR');
        return {
            error: true,
            message: userData.message,
        }
    }
    
})

export const onUpdateUserFulfilled = (state, action) => {
    if (action.payload.error){
        console.log('onPatchUserFulfilled: error');
        state.errorMessage = action.payload.message;
        state.isLoggedIn = true;
        state.isUpdated = false;
    }else{
        console.log('onPatchUserFulfilled: success');
        state.errorMessage = '';
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isUpdated = true;
        console.log(state.user);
    }
}

export const onUpdateUserRejected = (state) => {
   console.log('onPatchUserRejected');
   state.isLoggedIn = true;
   state.isUpdated = false;
}