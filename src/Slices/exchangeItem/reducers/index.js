export const exchangeItemReducers = {
    addItemToReceive: (state, item) => {
        state.itemToReceive = item.payload;
    },
    toggleItemToGive: (state, item) => {
        const indexItem = state.itemsToGive.findIndex((element) => element.itemId === item.payload.itemId);
        if (indexItem + 1) {
            state.itemsToGive.splice(indexItem, 1);
        } else {
            state.itemsToGive.push(item.payload);
        }
    },
    clearGiveState: (state) => {
        state.itemsToGive = [];
    },
    clearState: (state) => {
        state.itemToReceive = null;
        state.itemsToGive = [];
    },
}
