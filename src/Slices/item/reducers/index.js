export const itemReducers = {
    toggleSuccess: (state) => {
        state.success = !state.success;
        state.item = null;
    },
    clearState: (state) => {
        state.item = null;
        state.success = false;
        state.errorMessage = '';
    },
    clearItem: (state) => {
        state.item = null;
    },
}
