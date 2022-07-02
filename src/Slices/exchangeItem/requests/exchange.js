import { createAsyncThunk } from '@reduxjs/toolkit';

export const exchange = createAsyncThunk('exchange', async (params, {getState}) => {
    const state = getState();
    const data = {"userToId":state.exchangeItem.itemToReceive.ownerUserId,
            "proposedItemsNames":state.exchangeItem.itemsToGive.map(item => item.name).join(', '),
            "receiveItemName":state.exchangeItem.itemToReceive.name};

    const exchangePostFetch = await fetch(`http://localhost:8000/exchanges`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaXNBdXRoZW50aWNhdGVkIjp0cnVlLCJpYXQiOjE2NTY3Mzk2MTAsImV4cCI6MTY1NzM0NDQxMH0.48E-A-bZAeOvhcBHSX66JV2WBN3Yagecd9R0KkykcK4`,
            'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    const exchangePostData = await exchangePostFetch.json();
    if (exchangePostFetch.status === 200) {
        return exchangePostData;
    } else {
        return {
            error: true,
            message: exchangePostData.message,
        }
    }
});
