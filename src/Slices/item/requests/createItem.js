import { createAsyncThunk } from "@reduxjs/toolkit";

export const createItem = createAsyncThunk('item/new', async ({item, fileList}, { getState }) => {
    const state = getState();
    const formData = new FormData();
    
    for(let counter = 0; counter < fileList.fileIdCount; ++counter){
        formData.append('file', fileList[counter]);
    }
    
    const uploadFetch = await fetch('http://localhost:8000/uploads', {
        headers: {
            "Authorization": `Bearer ${state.user.user.token}`,
        },
        method: 'POST',
        body: formData,
    });

    const uploadedData = await uploadFetch.json();

    item.photoUrls = uploadedData.uploadedFiles.map((file) => file.url);
    console.log(item.photoUrls);

    const itemFetch = await fetch('http://localhost:8000/items', {
        method: 'POST',
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${state.user.user.token}`,
        },
        body: JSON.stringify(item),
    });

    const itemData = await itemFetch.json();
    
    if (itemFetch.status === 201) {
        return itemData;
    } else {
        return {
            error: true,
            message: itemData.error.message,
        }
    }
});