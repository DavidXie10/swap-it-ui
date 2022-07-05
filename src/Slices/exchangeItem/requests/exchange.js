import { createAsyncThunk } from '@reduxjs/toolkit';

export const exchange = createAsyncThunk('exchange', async (params, {getState}) => {
    const state = getState();
    const data = {
        'userToId':state.exchangeItem.itemToReceive.ownerUserId,
        'proposedItemsNames':state.exchangeItem.itemsToGive.map(item => item.name).join(', '),
        'receiveItemName':state.exchangeItem.itemToReceive.name
    };

    const exchangePostFetch = await fetch(`${process.env.REACT_APP_API_ROUTE}/exchanges`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${state.user.user.token}`,
            'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    const exchangePostData = 'Éxito';
    if (exchangePostFetch.status === 204) {
        return exchangePostData;
    } else {
        return {
            error: true,
            message: exchangePostData.message,
        }
    }
});

export const onExchangeItemFullfiled = (state, action) => {
    if (action.payload.error) {
        state.success = false;
        state.errorMessage = action.payload.message;
    } else {
        state.success = true;
        state.errorMessage = '';
    }
};

export const onExchangeItemRejected = (state) => {
    state.itemToReceive = null;
    state.itemsToGive = [];
    state.errorMessage = '';
    state.success = false;
}
