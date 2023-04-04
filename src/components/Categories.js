
const Categories = ({ categoryId, setCategoryId }) => {

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
						className={id === categoryId ? 'active' : null}
						key={id}
						onClick={() => setCategoryId(id)}
					>{label}</li>
				})}
			</ul>
		</div>
	)
}

export default Categories