import { createAsyncThunk } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

export const exchange = createAsyncThunk('exchange', async (params, {getState}) => {
    const state = getState();
    console.log("hola mundo");
    const data = {"userToId":state.exchangeItem.itemToReceive.ownerUserId,
            "proposedItemsNames":state.exchangeItem.itemsToGive.map(item => item.name).toString(),
            "receiveItemName":state.exchangeItem.itemToReceive.name};
    console.log(data);
//${state.user.user.token}
    const exchangePostFetch = await fetch(`http://localhost:8000/exchanges`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaXNBdXRoZW50aWNhdGVkIjp0cnVlLCJpYXQiOjE2NTY3Mzk2MTAsImV4cCI6MTY1NzM0NDQxMH0.48E-A-bZAeOvhcBHSX66JV2WBN3Yagecd9R0KkykcK4`,
            'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    const exchangePostData = await exchangePostFetch.json();
    console.log(exchangePostData);
    console.log(exchangePostFetch.status);
    if (exchangePostFetch.status === 200) {
        
        return exchangePostData;
    } else {
        return {
            error: true,
            message: exchangePostData.message,
        }
    }
});
