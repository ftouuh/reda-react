import {configureStore} from '@reduxjs/toolkit';
import list from './slices/employeeSlice'
const store = configureStore({
    reducer : {
        list : list
    }
})

export default store;