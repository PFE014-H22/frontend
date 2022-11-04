import styles from './HorizontalDivider.module.scss';

/**
 * Component wrapper the `hr` html element.
 */
const HorizontalDivider = () => {
	return (
		<div className={styles.container}>
			<hr className={styles.divider} />
		</div>
	);
};

export default HorizontalDivider;
