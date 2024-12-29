import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    latitude:'',
    longitude:'',
    fromDate:'',
    toDate:'',
    errMsg:'',
    weatherData: [],
    activeTab:'grid',
}

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setLatitude: (state, action) => {
            state.latitude = action.payload;
        },
        setLongitude: (state, action) => {
            state.longitude = action.payload;
        },
        setFromDate: (state, action) => {
            state.fromDate = action.payload;
        },
        setToDate: (state, action) => {
            state.toDate = action.payload;
        },
        setErrMsg: (state, action) => {
            state.errMsg = action.payload;
        },
        setWeatherData: (state, action) => {
            state.weatherData = action.payload;
        },
        setActiveTab: (state, action) => {
            state.activeTab = action.payload;
        }
    }
})

export const {
    setLatitude,
    setLongitude,
    setFromDate,
    setToDate,
    setErrMsg,
    setWeatherData,
    setActiveTab
} = appSlice.actions;

export default appSlice.reducer;