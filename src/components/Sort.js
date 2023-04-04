import { useState } from "react"

const Sort = () => {
	const [activeFilter, setActiveFilter] = useState(0);
	const [isOpen, setIsOpen] = useState(false);
	const filters = [
		'популярности',
		'цене',
		'алфавиту'
	]

	const handleSortClick = (filter) => {
		setActiveFilter(filter);
		setIsOpen(isOpen => !isOpen)
	}

	return (
		<div className="sort">
			<div className="sort__label">
				<b>Сортировка по:</b>
				<span onClick={() => setIsOpen(isOpen => !isOpen)}>{filters[activeFilter]}</span>
			</div>
			{isOpen && <div className="sort__popup">
				<ul>
					{filters.map((label, index) => <li
						onClick={() => handleSortClick(index)}
						className={activeFilter === index ? 'active' : null}
						key={index}
					>{label}</li>)}
				</ul>
			</div>}
		</div>
	)
}

export default Sort