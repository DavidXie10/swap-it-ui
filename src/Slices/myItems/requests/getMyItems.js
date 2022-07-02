import { createAsyncThunk } from "@reduxjs/toolkit";

export const getMyItems = createAsyncThunk('items/getMyItems', async (user,{getState}) => {
    const state = getState();
    const myItemsFetch = await fetch(`http://localhost:8000/users/${user.id}/items`, {
        method: 'GET',
        headers: {
            "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaXNBdXRoZW50aWNhdGVkIjp0cnVlLCJpYXQiOjE2NTY3ODk4OTYsImV4cCI6MTY1NzM5NDY5Nn0.awTIHBO4nWbRcwp0vyAiftpTABaKXCGmUxvVnh58p40`,
        },
    });
    console.log("hola mundo 1")
    let myItemsData = await myItemsFetch.json();
    console.log("hola mundo 2")
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
    } else if (myItemsFetch.status === 401 || myItemsFetch.status === 500 || myItemsFetch.status === 404) {
        return {
            error: true,
            message: myItemsFetch.error.message,
        }
    }
});

export const onGetMyItemsFullfiled = (state, action) => {
    
    if (action.payload.error) {
        state.myItems = null;
        state.errorMessage = action.payload.message;
        state.success = false;
    } else {
        state.myItems = action.payload;
        state.success = true;
    }
};

export const onGetMyItemsRejected = (state) => {
    state.myItems = null;
    state.success = false;
}