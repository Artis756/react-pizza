import ContentLoader from "react-content-loader"

const PizzaSkeleton = (props) => (
	<ContentLoader
		className="pizza-block"
		speed={2}
		width={280}
		height={465}
		viewBox="0 0 280 465"
		backgroundColor="#f3f3f3"
		foregroundColor="#ecebeb"
		{...props}
	>
		<circle cx="134" cy="126" r="122" />
		<rect x="0" y="268" rx="0" ry="0" width="280" height="27" />
		<rect x="2" y="321" rx="0" ry="0" width="280" height="62" />
		<rect x="10" y="413" rx="18" ry="18" width="80" height="40" />
		<rect x="132" y="403" rx="23" ry="23" width="146" height="50" />
	</ContentLoader>
)

export default PizzaSkeleton
