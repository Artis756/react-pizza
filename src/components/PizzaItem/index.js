import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../redux/slices/cartSlice";

function PizzaItem({ title, price, imageUrl, types, sizes, id }) {
	const [activeType, setActiveType] = useState(0);
	const [activeSize, setActiveSize] = useState(0);
	const pizza = {
		id: `${id}` + activeSize + activeType,
		title,
		price,
		imageUrl,
		size: sizes[activeSize],
		type: types[activeType] === 0 ? 'тонкое' : 'традиционное',
	}
	const dispatch = useDispatch();
	const pizzaData = useSelector(state => state.cart.pizzas.find(({ count, ...obj }) => {
		return JSON.stringify(obj) === JSON.stringify(pizza)
	})) // Аналогичная проверка как в cartSlice

	const addToCart = () => {
	
		dispatch(addItem(pizza))
	}

	return (
		<div className="pizza-block">
			<img
				className="pizza-block__image"
				src={imageUrl}
				alt="Pizza"
			/>
			<h4 className="pizza-block__title">{title}</h4>
			<div className="pizza-block__selector">
				<ul>
					{types.map((type, index) => {
						const label = type === 0 ? 'тонкое' : 'традиционное'
						return <li
							onClick={() => setActiveType(type)}
							className={index === activeType ? 'active' : null}
							key={index}>{label}</li>
					})}
				</ul>
				<ul>
					{sizes.map((size, index) => <li
						onClick={() => setActiveSize(index)}
						className={index === activeSize ? 'active' : null}
						key={index}>{size} см.</li>)}
				</ul>
			</div>
			<div className="pizza-block__bottom">
				<div className="pizza-block__price">от {price} ₽</div>
				<button className="button button--outline button--add"
					onClick={() => addToCart()}>
					<svg
						width="12"
						height="12"
						viewBox="0 0 12 12"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
							fill="white"
						/>
					</svg>
					<span>Добавить</span>
					{pizzaData && <i>{pizzaData.count}</i>}
				</button>
			</div>
		</div>
	)
}

export default PizzaItem