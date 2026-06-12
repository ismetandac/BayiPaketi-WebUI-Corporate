import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
    currentRouteKey: '',
    PageTitle: ''
}

export const commonSlice = createSlice({
    name: 'base/common',
    initialState,
    reducers: {
        setCurrentRouteKey: (state, action) => {
            state.currentRouteKey = action.payload
        },
        setPageTitle: (state, action) => {
            state.PageTitle = action.payload
        },
    },
})

export const { setCurrentRouteKey, setPageTitle } = commonSlice.actions

export default commonSlice.reducer
