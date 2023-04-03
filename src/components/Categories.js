import { useState } from "react"

const Categories = () => {
	const [activeFilter, setActiveFilter] = useState(0);
	const filters = [
		{ label: "Все", id: 0 },
		{ label: "Мясные", id: 1 },
		{ label: "Вегетарианская", id: 2 },
		{ label: "Гриль", id: 3 },
		{ label: "Острые", id: 4 },
		{ label: "Закрытые", id: 5 },
	]
	return (
		<div className="categories">
			<ul>
				{filters.map(({ label, id }) => {
					return <li
						className={id === activeFilter ? 'active' : null}
						key={id}
						onClick={() => setActiveFilter(id)}
					>{label}</li>
				})}
			</ul>
		</div>
	)
}

export default Categories