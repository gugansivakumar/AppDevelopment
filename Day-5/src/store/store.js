// store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

// Define your featured products slice
const featuredProductsSlice = createSlice({
  name: 'featuredProducts',
  initialState: {
    products: [
      {
        id: 1,
        name: 'Milk',
        description: 'Product description goes here.',
      imageUrl: '../img/milk.jpg',
      },
      {
        id: 2,
        name: 'Vegtables',
        description: 'Product description goes here.',
       imageUrl: '../img/veg.jpg',
      },
    ],
  },
  reducers: {},
});
const store = configureStore({
  reducer: {
    featuredProducts: featuredProductsSlice.reducer,
    // Add more slices as needed
  },
});

export default store;