import {configureStore} from "@reduxjs/toolkit";
import themeReducer from './slice'
import locReducer from "./slice1";
export default configureStore({
    reducer:{theme:themeReducer, userLocation:locReducer}
})