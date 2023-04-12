import { useEffect, useRef, useState } from "react"


export default (value, delay) => {
	const [debauncedValue, setDebauncedValue] = useState(value);
	useEffect(() => {
		const timerId = setTimeout(() => {
			setDebauncedValue(value)
		}, delay);

		return () => {
			clearTimeout(timerId);
		}
	}, [value, delay])

	return debauncedValue;

}