import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    data: ''
}

export const formSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        formData: (state) => 
        {
      state=state.data
        } 
 ,
    }
});

export const { formData } = formSlice.actions
export default formSlice.reducer