import { configureStore } from "@reduxjs/toolkit";
import resumeSectionsSlice from "./features/resumeSectionsSlice";


const store = configureStore({
    reducer: {
        resumeSections:resumeSectionsSlice.reducer
    }
});

export default store