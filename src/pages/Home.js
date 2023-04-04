import React from 'react'
import Categories from '../components/Categories';
import PizzaItem from '../components/PizzaItem';
import PizzaSkeleton from '../components/PizzaItem/PizzaSkeleton';
import Sort from '../components/Sort'

import { useEffect, useState } from 'react';

const Home = () => {
	const [items, setItems] = useState([])
	const [loading, setLoading] = useState(true);

	const fetchPizzas = (pizzas) => {
		setItems(pizzas);
		setLoading(false)
	}
	useEffect(() => {
		fetch('https://642afee600dfa3b54754647e.mockapi.io/pizzas')
			.then(res => res.json())
			.then(fetchPizzas)
			.catch(console.log)
			window.scrollTo(0,0)
	}, [])

	return (
		<>
			<div className="content__top">
				<Categories />
				<Sort />
			</div>
			<h2 className="content__title">Все пиццы</h2>
			<div className="content__items">
				{loading && [1, 2, 3, 4, 5, 6].map(item => <PizzaSkeleton key={item} />)}
				{items.map(pizza => {
					return <PizzaItem {...pizza} key={pizza.id} />
				})}
			</div>
		</>
	)
}

export default Home