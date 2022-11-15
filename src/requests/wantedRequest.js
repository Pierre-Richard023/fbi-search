import { createAsyncThunk } from '@reduxjs/toolkit'

import { URL_BASE } from '../data/var'

export const fetchWantedPerson = createAsyncThunk('wanted/fetchWantedPerson', () => {
    return fetch(`${URL_BASE}/wanted`).then((res) => {
        return res.json()
    }).then(res => res.items)
})