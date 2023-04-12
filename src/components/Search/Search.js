import { useDeferredValue, useEffect, useRef, useState } from 'react';

import styles from './Search.module.scss';
import searchImg from './search.png';
import closeImg from './close.png';
import useDebounce from '../../hooks/useDebounce';
import { setSearchValue } from '../../redux/slices/filtersSlice';
import { useDispatch } from 'react-redux';

const Search = () => {
	const [value, setValue] = useState('');
	const inputRef = useRef();
	const debauncedValue = useDebounce(value, 700);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setSearchValue(value));
	}, [debauncedValue]);

	const handleInputClear = () => {
		setValue('');
		inputRef.current.focus()
	}

	return (
		<div className={styles.wrapper}>
			<img src={searchImg} alt="search" className={styles.searchImg} />
			<input
				className={styles.input}
				type="text"
				placeholder='Найти пиццу'
				value={value}
				onChange={(e) => setValue(e.target.value)}
				ref={inputRef} />
			{value && <img src={closeImg} alt="search" className={styles.closeImg} onClick={handleInputClear} />}
		</div>
	)
}

export default Search