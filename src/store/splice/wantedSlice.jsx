import { createSlice } from '@reduxjs/toolkit'
import { fetchWantedPerson } from '../../requests/wantedRequest'


export const wantedSlice = createSlice({
    name:'wanted',
    initialState: {
        loadingResults : false,
        results:[],
        errorResults:''
    },
    extraReducers: (builder) => {

        builder.addCase(fetchWantedPerson.pending, (state) => {
            state.loadingResults = true
        })
        builder.addCase(fetchWantedPerson.fulfilled, (state, action) => {
            state.loadingResults = false
            state.results = action.payload
            state.errorResults = ''
        })
        builder.addCase(fetchWantedPerson.rejected, (state, action) => {
            state.loadingResults = false
            state.filmSelected = []
            state.errorResults = action.error.message
        })
    }
})




export default wantedSlice.reducer