import { createAsyncThunk } from "@reduxjs/toolkit";

export const getMyItems = createAsyncThunk('items/getMyItems', async (user,{getState}) => {
    const state = getState();
    const myItemsFetch = await fetch(`http://localhost:8000/users/${user.id}/items`, {
        method: 'GET',
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaXNBdXRoZW50aWNhdGVkIjp0cnVlLCJpYXQiOjE2NTY3MzQ4NzksImV4cCI6MTY1NzMzOTY3OX0.R2SH2kaXTjB0Ss7qOQ1B19cHIicpyoWb-FR2-wqQoss",
        },
    });
    let myItemsData = await myItemsFetch.json();
    if (myItemsFetch.status === 200) {
        myItemsData.forEach(item => {
            if(item.itemState === 1) {
                item.itemState = "Nuevo";
            } else {
                item.itemState = "Usado";
            }
            switch(item.location){
                case 1:
                    item.location = "San José";
                    break;
                case 2:
                    item.location = "Alajuela";
                    break;
                case 3:
                    item.location = "Cartago";
                    break;
                case 4:
                    item.location = "Heredia";
                    break;
                case 5:
                    item.location = "Guanacaste";
                    break;
                case 6:
                    item.location = "Puntarenas";
                    break;
                case 7:
                    item.location = "Limón";
                    break;
                default:
                    item.location = "No es de Costa Rica";
                    break;
            }
        });
        return myItemsData;
    } else if (myItemsFetch.status === 404 || myItemsFetch.status === 500) {
        return {
            error: true,
            message: myItemsData.error.message,
        }
    }
});

export const onGetMyItemsFullfiled = (state, action) => {
    if (action.payload.error) {
        state.myItems = null;
        state.errorMessage = action.payload.message;
    } else {
        state.myItems = action.payload;
    }
};

export const onGetMyItemsRejected = (state) => {
    state.myItems = null;
}