import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
	pizzas: [],
	status: 'loading'
}

const fetchPizzas = createAsyncThunk('pizza/fetchPizzas',
	async (url) => {
		const data = await fetch(url).then(res => res.json())
		return data
	})

const pizzaSlice = createSlice({
	name: 'pizza',
	initialState,
	reducers: {

	},
	extraReducers: {
		[fetchPizzas.pending]: (state) => { state.status = 'loading' },
		[fetchPizzas.fulfilled]: (state, action) => { state.pizzas = action.payload; state.status = 'idle' },
		[fetchPizzas.rejected]: (state) => { state.status = 'error' }
	}
})

export { fetchPizzas };
const { actions, reducer } = pizzaSlice;
export default reducer;