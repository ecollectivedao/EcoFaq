import { configureStore } from "@reduxjs/toolkit";

import {theme} from './authSlice'
import trusteeReducer from 'containers/TrusteeList/store/TrusteeSlice'

export const store = configureStore({
    reducer: {theme, trusteeReducer},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== "production"
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch