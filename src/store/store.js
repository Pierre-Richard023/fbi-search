import { configureStore } from '@reduxjs/toolkit'
import searchReducer  from './splice/searchSlice';
import wantedReducer  from './splice/wantedSlice';

export default configureStore({
    reducer: {
        search:searchReducer,
        wanted:wantedReducer,
    },
}); 