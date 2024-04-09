import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            // const existingItem = state.items.findIndex((item) => item.card.info.id === action.payload.card.info.id)
            console.log("state", current(state.items));

            // The item to be added
            const newItem = action.payload;

            // Check if the item already exists in the cart
            const isDuplicate  = state.items.some((item) => item.card.info.id === newItem.card.info.id)

            if (!isDuplicate) {
                // If the item doesn't exist in the cart, add it
                state.items.push(newItem);
            }else {
                // If the item already exists, you can choose to update its quantity or ignore it
                console.log('Item already exists in the cart');
            }
            // state.items.push(action.payload);
        },

        // removeItem: (state) => {
        //     state.items.pop();
        // },

        removePerticularItem: (state, action) => {
            console.log("state", current(state.items));
            const index = action.payload.card.info.id
            const idMatch = index;
            const removeIndex = state.items.findIndex((item) => {
            //    console.log("item.id", current(item));
               if (item.card.info.id === idMatch) {
                    console.log("matched");
                    return true;
               }
            //    return item.id === idMatch;
               return false;
            });

            // console.log("removeIndex", removeIndex);
            if (removeIndex !== -1) {
                state.items.splice(removeIndex, 1);
            }          
        },

        clearCart: (state) => {
            // either mutate the existing state or return a new state
            state.items.length = 0;
            // return { items: [] }; //this new [] will be replaced inside originalState = [] 
        },
    }
});

export const {addItem, removeItem, clearCart, removePerticularItem} = cartSlice.actions;

export default cartSlice.reducer;