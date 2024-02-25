
import { useDispatch } from "react-redux";
import { dispatch } from "./Store";
const { createSlice } = require("@reduxjs/toolkit")



let initialState={
    sideBar:{
        open:false,
        type:"CONTACT"
    }
}
const appslice=createSlice(
    {
        name:"app",
        initialState,
        reducers:{
            toogleSideBar(state,action){
                state.sideBar.open=!state.sideBar.open
                console.log("🚀 ~ file: Slice.js:20 ~ toogleSideBar ~ state.sideBar.open:", state.sideBar.open)
            },
            updateSideBar(state,action){
                console.log('action.payload', action.payload)
                state.sideBar.type = action.payload
              
            }
        }
    }
)
export default appslice.reducer;
export const {toogleSideBar,updateSideBar}=appslice.actions;

export function ToogleSideBar() {
  
    return async () => {
        dispatch(appslice.actions.toogleSideBar())
    }
}
export const UpdateSideBarfun =(type) =>{

    return async()=>{
        dispatch(updateSideBar(type))
    }
}