import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	pizzas: [],
	totalPrice: 0,
	pizzasCount: 0
}

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem: (state, { payload }) => {
			const isMatched = state.pizzas.find(({ count, ...obj }) => JSON.stringify(obj) === JSON.stringify(payload)); // Проверка объектов на совпадение ключ-значение за исключением свойства count, т.к. оно будет всегда разным
			if (isMatched) {
				isMatched.count += 1;
			} else {
				const obj = { ...payload, count: 1 } // Сделано для того, чтобы браузер не ругался на изменение read only свойств
				state.pizzas.push(obj)
			}
			state.pizzasCount += 1;
			state.totalPrice += payload.price;
		},
		deleteItem: (state, action) => {
			const obj = state.pizzas.find(obj => obj.id === action.payload);
			state.pizzasCount -= obj.count;
			state.totalPrice -= obj.price * obj.count;
			state.pizzas = state.pizzas.filter(item => item.id !== action.payload);
		},
		incItem: (state, action) => {
			{
				const obj = state.pizzas.find(item => item.id === action.payload);
				obj.count += 1;
				state.totalPrice += obj.price;
				state.pizzasCount += 1;
			}
		},
		decItem: (state, action) => {
			{
				const obj = state.pizzas.find(item => item.id === action.payload);
				if (obj.count <= 1) {
					state.pizzas.splice(state.pizzas.indexOf(obj), 1)
				} else {
					obj.count -= 1;
				}
				state.totalPrice -= obj.price;
				state.pizzasCount -= 1;
			}
		},
		clearAll: (state) => {
			state.pizzas = [];
			state.pizzasCount = 0;
			state.totalPrice = 0;
		}
	}
})

const { actions, reducer } = cartSlice;
export default reducer;
export const { addItem, deleteItem, incItem, decItem, clearAll } = actions;