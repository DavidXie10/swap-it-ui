import { createAsyncThunk } from '@reduxjs/toolkit';

export const editItem = createAsyncThunk('item/:id', async ({item, fileList, deletedImages, id}, {getState}) => {
    const formData = new FormData();
    const state = getState();

    if(deletedImages.length > 0){
        const areMultipleFiles = deletedImages.length > 1;
        const urls = {
            urls: areMultipleFiles ? deletedImages : deletedImages[0]
        }
        const deleteFilesFetch = await fetch(`http://localhost:8000/uploads/${areMultipleFiles ? 'multiple' : 'single'}`, {
            headers: {
                'Authorization': `Bearer ${state.user.user.token}`,
                'Content-type': 'application/json',
            },
            method: 'DELETE',
            body: JSON.stringify(urls),
        });
        await deleteFilesFetch.json();

    
    }
    
    for(let counter = 0; counter < fileList.fileIdCount; ++counter){
        if(fileList[counter]){
            formData.append('file', fileList[counter]);
        }
    }

    if(Array.from(formData.keys()).length > 0){
        const uploadFetch = await fetch('http://localhost:8000/uploads', {
            headers: {
                'Authorization': `Bearer ${state.user.user.token}`,
            },
            method: 'POST',
            body: formData,
        });
    
        const uploadedData = await uploadFetch.json();
        item.photoUrls = item.photoUrls.concat(uploadedData.uploadedFiles.map((file) => file.url));
    }
    
    if(deletedImages.length > 0){
        item.photoUrls = item.photoUrls.filter(item => !deletedImages.includes(item));
    }

    delete item.itemId;
    delete item.ownerFullName;
    delete item.ownerUserId;

    item.photoUrls = item.photoUrls.filter(item => item !== '');

    const itemPatchFetch = await fetch(`http://localhost:8000/items/${id}`, {
        method: 'PATCH',
        headers: {
            'Authorization': `Bearer ${state.user.user.token}`,
            'Content-type': 'application/json',
        },
        body: JSON.stringify(item),
    });

    const itemData = await itemPatchFetch.json();

    if (itemPatchFetch.status === 200) {
        return itemData;
    } else {
        return {
            error: true,
            message: itemData.error.message,
        }
    }
});
