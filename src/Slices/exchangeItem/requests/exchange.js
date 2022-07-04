import { createAsyncThunk } from '@reduxjs/toolkit';

export const exchange = createAsyncThunk('exchange', async (params, {getState}) => {
    const state = getState();
    const data = {
        "userToId":state.exchangeItem.itemToReceive.ownerUserId,
        "proposedItemsNames":state.exchangeItem.itemsToGive.map(item => item.name).join(', '),
        "receiveItemName":state.exchangeItem.itemToReceive.name
    };

    const exchangePostFetch = await fetch(`http://localhost:8000/exchanges`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${state.user.user.token}`,
            'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    const exchangePostData = 'Exito';
    if (exchangePostFetch.status === 204) {
        return exchangePostData;
    } else {
        return {
            error: true,
            message: exchangePostData.message,
        }
    }
});