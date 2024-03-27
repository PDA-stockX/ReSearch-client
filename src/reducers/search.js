import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    reports: [],
    analysts: [],
    firms: [],
    activateMoreButton: false,
}

const searchSlice = createSlice({
    name: "search",
    initialState: initialState,
    reducers: {
        setReports: (state, action) => {
            state.reports = action.payload;
        },
        setAnalysts: (state, action) => {
            state.analysts = action.payload;
        },
        setFirms: (state, action) => {
            state.firms = action.payload;
        },
        activateMoreButton: (state, action) => {
            state.activateMoreButton = true;
        },
    }
});

export const {setReports, setAnalysts, setFirms, activateMoreButton} = searchSlice.actions;
export default searchSlice.reducer;