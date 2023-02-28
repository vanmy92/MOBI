import {createSlice} from '@reduxjs/toolkit'
const blaSlice = createSlice({
    name:'bla',
    initialState:{
        name:"",
        age:"sadasd"
    },reducers:{
        update:(state,action)=>{
            state.name = action.payload.name
            state.age = action.payload.age
        }
    }
})

export const {update} = blaSlice.actions
export default blaSlice.reducer
