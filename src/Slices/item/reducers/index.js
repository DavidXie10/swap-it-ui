export const itemReducers = {
    toggleSuccess: (state) => {
        state.success = !state.success;
    },
    clearState: (state) => {
        state.item = null;
        state.success = false;
        state.errorMessage = '';
    }
}
