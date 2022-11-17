import {createSlice} from '@reduxjs/toolkit'


const loading = createSlice({
    name: 'loading',
    initialState: true,
    reducers:{
        showloading: function(state, action){
            return   action.payload
        },
        removeloading: function(state, action){
            console.log('=====', action)
            return  false
        }
    }
})

export const {showloading, removeloading} = loading.actions
export const loadingReducer  = loading.reducer