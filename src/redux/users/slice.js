import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
name: 'users',
initialState:{
    users: [],
   

},
reducers:{
    addUser(state, {payload}){
        state.users.push(payload)
    },
    deleteUser(state, {payload}){
        const newUsers = state.users.filter(
            user => user.id !== payload
        )
       state.users = newUsers
    
    }
}
})

export const {addUser, deleteUser } = userSlice.actions;

export const usersReduser = userSlice.reducer;

