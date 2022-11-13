import { configureStore, combineReducers } from "@reduxjs/toolkit";
import categoriesReducer from "./CategoriesRedux";

export default configureStore({
    reducer: {
        privatecategories: categoriesReducer,
    }
});
