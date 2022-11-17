import {createSlice} from '@reduxjs/toolkit'


const data = JSON.parse( window.localStorage.getItem('oderData')) ? JSON.parse( window.localStorage.getItem('oderData')) : []
const indexSlice = createSlice({
    name: 'amountCart',
    initialState: data.length,
    reducers:{
        pushAmount: function(state, action){
            return  state += action.payload
        },
        removeAmount: function(state, action){
            return state -= action.payload
        }
    }
})

export const {pushAmount, removeAmount} = indexSlice.actions
export const amountReducer  = indexSlice.reducer