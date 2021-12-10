import {configureStore} from "@reduxjs/toolkit";
import themeReducer from './slice'
export default configureStore({
    reducer:{theme:themeReducer},
})