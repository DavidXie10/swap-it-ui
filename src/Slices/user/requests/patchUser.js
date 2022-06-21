import { createAsyncThunk } from "@reduxjs/toolkit";

export const patchUser = createAsyncThunk('users/patchUser', async({user, photo}) => {

    const form = new FormData();
    form.append('file', photo);
    const uploadFetch = await fetch('http://localhost:7500/uploads', {
        method: 'POST',
        body: form,
    });
    console.log(uploadFetch);

    const uploadData = await uploadFetch.json();
    user.photoUrl = uploadData.url;

    //TODO: change to http://localhost:7500/users/:userId
    const userFetch = await fetch('http://localhost:7500/users/profile', {
        method: 'PATCH',
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(user),
    });

    const userData = await userFetch.json();
    if (userFetch.status === 200) {
        return userData;
    } else {
        return {
            error: true,
            message: userData.error.message,
        }
    }
    
})

export const onPatchUserFulfilled = (state, action) => {
    if (action.payload.error){
        console.log('onPatchUserFulfilled: error');
        state.errorMessage = action.payload.message;
    }else{
        console.log('onPatchUserFulfilled: success');
        state.user = action.payload;
    }
}

export const onPatchUserRejected = (state) => {
   console.log('onPatchUserRejected');
}