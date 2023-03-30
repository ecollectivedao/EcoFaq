import {createSlice} from '@reduxjs/toolkit'

type Profile = {
    userName: string | null;
}

const initialState = {
    userName: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

    }
})