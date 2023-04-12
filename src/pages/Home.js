import React from 'react'
import Categories from '../components/Categories';
import PizzaItem from '../components/PizzaItem';
import PizzaSkeleton from '../components/PizzaItem/PizzaSkeleton';
import Sort from '../components/Sort/Sort'

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from '../components/Pagination/Pagination';
import { fetchPizzas } from '../redux/slices/pizzaSlice';



const Home = () => {
	const { sortType, categoryId, searchValue } = useSelector(state => state.filters);
	const { pizzas, status } = useSelector(state => state.pizzas);
	const dispatch = useDispatch();

	useEffect(() => {
		const sortBy = sortType.replace('-', '');
		const order = sortType.includes('-') ? 'desc' : 'asc';
		const category = categoryId > 0 ? 'category=' + categoryId : '';

		const url = `https://642afee600dfa3b54754647e.mockapi.io/pizzas?${category}&sortBy=${sortBy}&order=${order}`;

		dispatch(fetchPizzas(url))
	}, [categoryId, sortType])

	return (
		<>
			<div className="content__top">
				<Categories />
				<Sort />
			</div>
			<h2 className="content__title">Все пиццы</h2>
			<div className="content__items">
				{status === 'loading' && [1, 2, 3, 4].map(item => <PizzaSkeleton key={item} />)}
				{status === 'idle' &&
					// Фильтрация на стороне UI, т.к. mockapi не хочет выполнять поиск по 2-м полям сразу
					pizzas.filter(item => item.title.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0)
						.map(pizza => {
							return <PizzaItem {...pizza} key={pizza.id} />
						})}
			</div>
			{pizzas.length !== 0 && <Pagination totalPages={pizzas} />}
		</>
	)
}

export default Home

