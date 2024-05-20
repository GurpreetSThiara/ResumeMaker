import { createSlice } from "@reduxjs/toolkit";



const resumeSectionsSlice = createSlice({
    name:"resumeSections",
    initialState:{
        sections:[]
    },
    reducers:{
        reorderSections:(state,action)=>{
            state.sections = action.payload;
        }
    }
})

export const {reorderSections} = resumeSectionsSlice.actions;
export default resumeSectionsSlice;