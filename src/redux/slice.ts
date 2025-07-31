import { createSlice } from '@reduxjs/toolkit';

const initialToken = localStorage.getItem("token") || null

const counterSlice = createSlice({
 name:"counter",
 initialState:{
  token: initialToken || ""
 },
 reducers: {
      login: (state, action) => {
      state.token = action.payload;
      localStorage.setItem("token", action.payload);
    },
    logout:(state)=>{
        localStorage.removeItem("token")
        state.token = ""
    }
 },

});

export const selectToken = (state:any) => state.counter.token;

export const { login, logout } = counterSlice.actions;

export default counterSlice.reducer