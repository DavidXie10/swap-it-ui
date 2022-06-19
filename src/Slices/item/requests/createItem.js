import { createAsyncThunk } from "@reduxjs/toolkit";

export const createItem = createAsyncThunk('item/new', async ({item, fileList}) => {
    const formData = new FormData();
    
    for(let counter = 0; counter < fileList.fileIdCount; ++counter){
        formData.append('file', fileList[counter]);
    }
    
/*
    const uploadFetch = await fetch('http://localhost:8000/uploads', {
        method: 'POST',
        body: formData,
    });

    const uploadedData = await uploadFetch.json();
    item.photosUrl = uploadedData.urls;

    const itemFetch = await fetch('http://localhost:8000/items', {
        method: 'POST',
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(item),
    });

    const itemData = await itemFetch.json();
    
    if (itemFetch.status === 200) {
        return itemData;
    } else {
        return {
            error: true,
            message: itemData.error.message,
        }
    }
    */
    console.log(item);
    return item;
});
