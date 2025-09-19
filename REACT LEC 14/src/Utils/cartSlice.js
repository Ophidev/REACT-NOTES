import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({

    name:"cart",
    initialState: {

        Items: []
    },

    reducers:{

        addItems: (state,action) =>{

            state.Items.push(action.payload);
        },

        removeItems: (state,action)=>{

            state.Items.pop();
        },

        clearCart:(state) =>{

            state.Items = [];
        }
    }
});


export const {addItems,removeItems,clearCart} = cartSlice.actions;

export default cartSlice.reducer;