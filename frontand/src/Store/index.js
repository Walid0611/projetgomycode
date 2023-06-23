import { configureStore }from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import memoSlice from './memoSlice';

export default configureStore({
    reducer:{
auth: authSlice ,
memo: memoSlice
    }
})