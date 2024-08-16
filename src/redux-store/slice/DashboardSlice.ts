import { createSlice } from "@reduxjs/toolkit";

const DasboardSlice = createSlice({
    name: 'Dasboard',
    initialState: {
        search: '',
        openSideDrawer: false,
        tempSelectedWidget: {},
        selectedWidget: {}
    },
    reducers: {
        updateSearch: (state, action) => {
            state.search = action.payload
        },
        updateSideDrawer: (state) => {
            state.openSideDrawer = !state.openSideDrawer
        },
        updateTempSelectedWidget: (state, action) => {
            state.tempSelectedWidget = action.payload
        },
        updateSelectedWidget: (state, action) => {
            state.selectedWidget = action.payload
        },
    }
})

export const { updateSearch, updateSideDrawer, updateTempSelectedWidget, updateSelectedWidget } = DasboardSlice.actions;
export default DasboardSlice.reducer;