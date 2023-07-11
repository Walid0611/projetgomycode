import { createSlice } from "@reduxjs/toolkit";

const UsresListSlice = createSlice({
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
   role:"user 2"

}
],
    reducers:{
        setUsersList:(state,action)=>{
            return action.payload
        }
    }
})

export const { setUsersList } = UsresListSlice.actions
export default UsresListSlice.reducer