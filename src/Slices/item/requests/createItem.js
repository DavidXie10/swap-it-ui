import { createAsyncThunk } from '@reduxjs/toolkit';
import Mixpanel from '../../../services/mixpanel';

export const createItem = createAsyncThunk('item/new', async ({item, fileList}, { getState }) => {
    const state = getState();
    const formData = new FormData();
    
    for(let counter = 0; counter < fileList.fileIdCount; ++counter){
        formData.append('file', fileList[counter]);
    }
    
    const uploadFetch = await fetch(`${process.env.REACT_APP_API_URL}/uploads`, {
        headers: {
            'Authorization': `Bearer ${state.user.user.token}`,
        },
        method: 'POST',
        body: formData,
    });

    const uploadedData = await uploadFetch.json();

    item.photoUrls = uploadedData.uploadedFiles.map((file) => file.url);

    const itemFetch = await fetch(`${process.env.REACT_APP_API_URL}/items`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${state.user.user.token}`,
        },
        body: JSON.stringify(item),
    });

    const itemData = await itemFetch.json();
    if (itemFetch.status === 201) {
        Mixpanel.track(Mixpanel.TYPES.ADD_NEW_ITEM, {
            categoryId: itemData.item.category
        });
        return itemData;
    } else {
        return {
            error: true,
            message: itemData.message,
        }
    }
});
