import { createAsyncThunk } from "@reduxjs/toolkit";

export const editItem = createAsyncThunk('item/:id', async ({item, fileList, deletedImages, itemId}, {getState}) => {
    const formData = new FormData();
    const state = getState();
    
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

    const areMultipleFiles = deletedImages.length > 1;
    const urls = areMultipleFiles ? deletedImages : deletedImages[0];
    const deleteFilesFetch = await fetch(`http://localhost:8000/uploads/${areMultipleFiles ? 'multiple' : 'single'}`, {
        headers: {
            "Authorization": `Bearer ${state.user.user.token}`,
        },
        method: 'DELETE',
        body: JSON.stringify(urls),
    })

    await deleteFilesFetch.json();
    
    const itemFetch = await fetch(`http://localhost:8000/items/${itemId}`, {
        method: 'PATCH',
        headers: {
            "Authorization": `Bearer ${state.user.user.token}`,
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
