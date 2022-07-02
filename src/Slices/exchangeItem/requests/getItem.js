import { createAsyncThunk } from "@reduxjs/toolkit";

export const getItem = createAsyncThunk('items/getItem', async (item) => {
    const itemFetch = await fetch(`http://localhost:8000/items/${item.id}`, {
        method: 'GET'
    });
    let itemData = await itemFetch.json();
    if (itemFetch.status === 200) {
        if(itemData.itemState === 1) {
            itemData.itemState = "Nuevo";
        } else {
            itemData.itemState = "Usado";
        }
        switch(itemData.location){
            case 1:
                itemData.location = "San José";
                break;
            case 2:
                itemData.location = "Alajuela";
                break;
            case 3:
                itemData.location = "Cartago";
                break;
            case 4:
                itemData.location = "Heredia";
                break;
            case 5:
                itemData.location = "Guanacaste";
                break;
            case 6:
                itemData.location = "Puntarenas";
                break;
            case 7:
                itemData.location = "Limón";
                break;
            default:
                itemData.location = "No es de Costa Rica";
                break;
        }
        console.log(itemData);
        return itemData;
    } else if (itemFetch.status === 404 || itemFetch.status === 500) {
        return {
            error: true,
            message: itemData.error.message,
        }
    }
});

export const onGetItemFullfiled = (state, action) => {
    if (action.payload.error) {
        state.itemToReceive = null;
        state.errorMessage = action.payload.message;
    } else {
        state.itemToReceive = action.payload;
    }
};

export const onGetItemRejected = (state) => {
    state.itemToReceive = null;
}