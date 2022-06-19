import { createAsyncThunk } from "@reduxjs/toolkit";

export const editItem = createAsyncThunk('item/:id', async ({item, fileList, deletedImages, itemId}) => {
    const formData = new FormData();
    
    for(let counter = 0; counter < fileList.fileIdCount; ++counter){
        formData.append('file', fileList[counter])
    }

    const uploadFetch = await fetch('http://localhost:8000/uploads', {
        method: 'POST',
        body: formData,
    });

    const uploadedData = await uploadFetch.json();
    item.photosUrl = uploadedData.urls;
    item.deletedImages = deletedImages;

    const itemFetch = await fetch(`http://localhost:8000/items/${itemId}`, {
        method: 'PATCH',
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
});
