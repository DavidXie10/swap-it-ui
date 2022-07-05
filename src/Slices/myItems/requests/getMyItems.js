import { createAsyncThunk } from '@reduxjs/toolkit';
import { getLocationById } from '../../../utils/constants';

export const getMyItems = createAsyncThunk('items/getMyItems', async (user, {getState}) => {
    const state = getState();
    const myItemsFetch = await fetch(`http://localhost:8000/users/${user.id}/items`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${state.user.user.token}`,
        },
    });
    let myItemsData = await myItemsFetch.json();
    if (myItemsFetch.status === 200) {
        if(myItemsData !== []) { 
            myItemsData.forEach(item => {
                if(item.itemState === 1) {
                    item.itemState = 'Nuevo';
                } else {
                    item.itemState = 'Usado';
                }
                item.location = getLocationById(item.location);
            }) ;
        }
        return myItemsData;
    } else {
        return {
            error: true,
            message: myItemsData.message,
        }
    }
});

export const onGetMyItemsFullfiled = (state, action) => {
    if (action.payload.error) {
        state.myItems = null;
        state.errorMessage = action.payload.message;
        state.success = false;
    } else {
        state.myItems = action.payload;
        state.success = true;
        state.errorMessage = '';
    }
};

export const onGetMyItemsRejected = (state) => {
    state.myItems = null;
    state.success = false;
}