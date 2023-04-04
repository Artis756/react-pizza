import React from 'react'
import error from './giphy.gif';
import styles from './NotFoundMessage.module.scss'

const NotFoundMessage = () => {
	return (
		<>
			<img src={error} alt="error" className={styles.errorImage} />
			<h1 className={styles.title}>Страница по вашему запросу на была найдена</h1>
		</>
	)
}

export default NotFoundMessage