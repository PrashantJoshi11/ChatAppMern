
import { useDispatch } from "react-redux";
const { createSlice } = require("@reduxjs/toolkit")



const initialState={
    sideBar:{
        open:false,
        type:"Contact"
    }
}
const appslice=createSlice(
    {
        name:"app",
        initialState,
        reducers:{
            toogleSideBar(state,action){
                state.sideBar.open=!state.sideBar.open
            },
            updateSideBar(state,action){
                state.sideBar.type=action.payload.type
            }
        }
    }
)
export default appslice.reducer;
export const {toogleSideBar,updateSideBar}=appslice.actions;

export function ToogleSideBar () {
    const dispatch =useDispatch();
    return async () => {
        
        dispatch(appslice.actions.toogleSideBar())
    }
}
export function UpateSideBar(type){
    const dispatch =useDispatch();
    return async()=>{
        dispatch(appslice.actions.updateSideBar(type))
    }
}