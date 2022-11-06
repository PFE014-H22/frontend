import { CSSProperties } from 'react';
import { clamp } from '../../../lib/clamp';
import styles from './PercentageBar.module.scss';

/**
 * The props used to configure the percentage bar component.
 */
export interface PercentageBarProps {
	/**
	 * Color of the filling bar.
	 */
	fillColor?: CSSProperties['color'];

	/**
	 * Percentage of the bar to fill between 0 and 1.
	 */
	percentage: number;
}

/**
 * Component used to represent a percentage in a bar format.
 */
const PercentageBar = ({
	fillColor = '#3b82f6',
	percentage,
}: PercentageBarProps) => {
	percentage = clamp(percentage, 0, 1);

	return (
		<div className={styles.container}>
			<div
				className={styles.fill__bar}
				style={{
					backgroundColor: fillColor,
					width: `${percentage * 100}%`,
				}}
			></div>
		</div>
	);
};

export default PercentageBar;
