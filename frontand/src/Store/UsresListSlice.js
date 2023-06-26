import { createSlice } from "@reduxjs/toolkit";

const UsresList = createSlice({
    name:"walidList",
    initialState:[{
       
        UserName:"user1 ",
        email:"user1@gmail.com",
        password:"azzerty",
       role:"user"
    },
{
    UserName:"user2  ",
    email:"user2@gmail.com",
    password:"azerty",
   role:"user"

}
],
    reducers:{
        setListUser:(state,action)=>{
            return action.payload
        }
    }
})

export const { setUsresList} = UsresListSlice.actions
export default UsresList.reducer