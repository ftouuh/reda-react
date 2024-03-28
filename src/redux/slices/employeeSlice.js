import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value : []
}

const employeeSlice = createSlice({
    name : 'Employee',
    initialState,
    reducers : {
        addEmployee : (state , action) => {
            state.value.push(action.payload);
        }
    }
})

export const {addEmployee} = employeeSlice.actions;
export default employeeSlice.reducer;