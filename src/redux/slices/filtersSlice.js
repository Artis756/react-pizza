import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	categoryId: 0,
	sortType: 'rating',
	searchValue: ''
}

const filtersSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		setCategoryId: (state, action) => { state.categoryId = action.payload },
		setSortType: (state, action) => { state.sortType = action.payload },
		setSearchValue: (state, action) => { state.searchValue = action.payload }
	}
})

const { actions, reducer } = filtersSlice;

export default reducer;
export const { setCategoryId, setSortType, setSearchValue } = actions;