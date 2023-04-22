import {createSlice} from '@reduxjs/toolkit'

type initialStateProps = {
    theme: string
}

const initialState: initialStateProps = {
    theme: 'light'
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setupTheme: (state, action) => {
            state.theme = action.payload
        }
    }
})


export const { reducer: theme, actions: themeSetup } = themeSlice
export const {setupTheme} = themeSetup