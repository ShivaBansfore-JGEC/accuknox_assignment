import { createSlice } from "@reduxjs/toolkit";

const DasboardSlice = createSlice({
    name: 'Dasboard',
    initialState: {
        search: '',
        openSideDrawer: false
    },
    reducers: {
        updateSearch: (state, action) => {
            state.search = action.payload
        },
        updateSideDrawer: (state) => {
            state.openSideDrawer = !state.openSideDrawer
        }
    }
})

export const { updateSearch, updateSideDrawer } = DasboardSlice.actions;
export default DasboardSlice.reducer;