import { createAsyncThunk } from "@reduxjs/toolkit";

export const deleteItem = createAsyncThunk('items/:id', async (param,{getState}) => {
    const state = getState();
    const deleteItemFetch = await fetch(`http://localhost:8000/items/${param.param}`, {
        method: 'DELETE',
        headers: {
            "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaXNBdXRoZW50aWNhdGVkIjp0cnVlLCJpYXQiOjE2NTY3ODk4OTYsImV4cCI6MTY1NzM5NDY5Nn0.awTIHBO4nWbRcwp0vyAiftpTABaKXCGmUxvVnh58p40`,
        },
    });
    let deleteItemData = await deleteItemFetch.json(); //Aqui se queda trabado el sistema
    console.log("hola mundo");
    //console.log(deleteItemFetch);
    if (deleteItemData.status === 204) {
        return deleteItemData;
    } else if (deleteItemData.status === 404 || deleteItemData.status === 500) {
        return {
            error: true,
            message: deleteItemData.error.message,
        }
    }
});

// export const onDeleteItemFullfiled = (state, action) => {
//     if (action.payload.error) {
//         state.errorMessage = action.payload.message;
//     } else {
//         state.myItems = action.payload;
//     }
// };

// export const onDeleteItemRejected = (state) => {
//     state.myItems = null;
// }