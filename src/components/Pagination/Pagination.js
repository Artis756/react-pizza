import React from 'react'
import './Pagination.scss';



const Pagination = ({ totalPages }) => {
	let numberOfPages = new Array(Math.ceil(totalPages.length / 4));
	numberOfPages = numberOfPages.fill(0, 0, numberOfPages.length);

	return (
		<ul className='pagination'>
			<li className='pagination__item button--outline'>
				<svg viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg" width='15' height='20'>
					<path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z" />
				</svg>
			</li>
			{totalPages.length !== 0 && numberOfPages.map((item, index) => <View number={index + 1} key={index} />)}
			<li className='pagination__item button--outline' >
				<svg viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg" width='15' height='20'>
					<path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
				</svg>
			</li>
		</ul>
	)
}

const View = ({ number }) => {
	return <li className='pagination__item button--outline'>{number}</li>
}



export default Pagination