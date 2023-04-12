import { configureStore } from "@reduxjs/toolkit";
import { createStore } from "redux";
import filters from './slices/filtersSlice';
import cart from './slices/cartSlice';
import pizzas from './slices/pizzaSlice';

const store = configureStore({
	reducer: {
		filters,
		cart,
		pizzas
	}
})

export default store;