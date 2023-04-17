import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isCartOpen : false,
    cartItems : []
};

const cartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers:{
        toggleCart(state, action){
            state.isCartOpen = action.payload;
        },
        add
    }
})