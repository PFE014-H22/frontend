import { clamp } from '../../lib/clamp';

export interface PercentageBarProps {
	/**
	 * Percentage of the bar to fill between 0 and 1.
	 */
	percentage: number;

	/**
	 * Color of the filling bar. Defaults to bg-blue-500
	 */
	color?: string;
}

const PercentageBar = ({
	percentage,
	color = 'bg-blue-500',
}: PercentageBarProps) => {
	percentage = clamp(percentage, 0, 1);

	return (
		<div className="h-5 w-full max-w-full rounded-full bg-[#B1B1B1]">
			<div
				className={`h-5 rounded-full ${color}`}
				style={{ width: `${percentage * 100}%` }}
			></div>
		</div>
	);
};

export default PercentageBar;
