import { configureStore } from '@reduxjs/toolkit'
import  counterSlice  from './counterReducer'
import  formSlice  from './formReducer'
export const store = configureStore({
  reducer: {counter:counterSlice,
  data:formSlice},
})