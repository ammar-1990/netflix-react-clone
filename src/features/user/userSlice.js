import { createSlice } from "@reduxjs/toolkit";

const initialState={
    user:JSON.parse(localStorage.getItem('user'))||null
}

const userSlice=createSlice({
    name:'user',
    initialState:initialState,
    reducers:{
        LOGIN:(state,action)=>{
            state.user=action.payload
        },
        LOGOUT:(state)=>{
            state.user=null
        }
    }
})


export default userSlice.reducer
export const {LOGIN,LOGOUT}=userSlice.actions