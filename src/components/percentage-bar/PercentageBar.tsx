import { clamp } from '../../lib/clamp';
import { BackgroundColor } from '../../types/colors';

/**
 * The props used to configure the percentage bar component.
 */
export interface PercentageBarProps {
	/**
	 * The background color of the percentage bar.
	 */
	backgroundColor?: BackgroundColor;

	/**
	 * Color of the filling bar. Defaults to bg-blue-500.
	 */
	fillColor?: BackgroundColor;

	/**
	 * Percentage of the bar to fill between 0 and 1.
	 */
	percentage: number;
}

/**
 * Component used to represent a percentage in a bar format.
 */
const PercentageBar = ({
	backgroundColor,
	fillColor = 'bg-blue-500',
	percentage,
}: PercentageBarProps) => {
	percentage = clamp(percentage, 0, 1);

	return (
		<div
			className={`h-5 w-full max-w-full rounded-full ${backgroundColor}`}
		>
			<div
				className={`h-5 rounded-full ${fillColor}`}
				style={{ width: `${percentage * 100}%` }}
			></div>
		</div>
	);
};

export default PercentageBar;
