import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const { name, image, cost } = action.payload; // Destructure product details from the action payload
      /**Check if the item already exists in the cart by comparing
       * names
       */
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem) {
        /**If the item already exists in the cart, increase its quantity
         */
        existingItem.quantity++;
      } else {
        /**If the item doesn't exist, add it to the cart with the 
         * quantity set to 1
         */
        state.items.push({name, image, cost, quantity: 1});
      }
    },
    removeItem: (state, action) => {
    },
    updateQuantity: (state, action) => {

    
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
