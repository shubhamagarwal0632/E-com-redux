import { createSlice } from "@reduxjs/toolkit";

const cartslice = createSlice({
    name:'cart',
    initialState:{
        items:[],
        totalprice:0
    },
    reducers:{
        addtocart(state,action){
            const newitem = action.payload;
            state.items.push(newitem);
            state.totalprice += newitem.price
        },
        clearitem(state){
            state.items=[];
            state.totalprice = 0
        },
        releteditem(state,action){
            
            const newitem = action.payload;
            newitem.filter((item)=>item.category == action.payload)
            // state.totalprice += newitem.price
        }
    }
})
export const selectcartitem= (state)=>state.cart.items;
export const selectcarttotaprice = (state)=>state.cart.totalprice;
export const {addtocart,clearitem,releteditem} = cartslice.actions;
export default cartslice.reducer