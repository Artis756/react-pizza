import { useState } from "react"
import arrowUp from './up-arrow.png';
import arrowDown from './down-arrow.png';

const Sort = ({ sortType, setSortType }) => {
	const [isOpen, setIsOpen] = useState(false);
	const filters = [
		{ label: 'популярности', value: 'rating' },
		{ label: 'популярности', value: '-rating' },
		{ label: 'цене', value: 'price' },
		{ label: 'цене', value: '-price' },
		{ label: 'алфавиту', value: 'title' },
		{ label: 'алфавиту', value: '-title' },
	]

	const handleSortClick = (value) => {
		setSortType(value);
		setIsOpen(isOpen => !isOpen)
	}

	return (
		<div className="sort">
			<div className="sort__label">
				<b>Сортировка по:</b>
				<span onClick={() => setIsOpen(isOpen => !isOpen)}>{filters.find(item => item.value === sortType).label} <img src={sortType.indexOf('-') > -1 ? arrowDown : arrowUp} alt="arrow" /></span>
			</div>
			{isOpen && <div className="sort__popup">
				<ul>
					{filters.map(({ label, value }, index) => {
						return (
							<li
								onClick={() => handleSortClick(value)}
								className={sortType === value ? 'active' : null}
								key={index}
							>{label}
								<img src={value.indexOf('-') > -1 ? arrowDown : arrowUp} alt="arrow" /></li>
						)
					})}
				</ul>
			</div>}
		</div>
	)
}

export default Sort