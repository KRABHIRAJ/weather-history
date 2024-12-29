import { configureStore } from "@reduxjs/toolkit";
import appSlice from '../store/slices/appSlice'
export const store = configureStore({
    reducer: {
        app: appSlice
    }
})