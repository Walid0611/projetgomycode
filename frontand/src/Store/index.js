import { configureStore }from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import memoSlice from './memoSlice';
import UsresListSlice from "./UsresListSlice";
import UserCards from "../components/Admin/UserCards";


export default configureStore({
    reducer:{
auth: authSlice ,
memo: memoSlice
    }
})