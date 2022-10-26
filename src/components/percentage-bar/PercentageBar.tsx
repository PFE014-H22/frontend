import { clamp } from '../../lib/clamp';

export interface PercentageBarProps {
	/**
	 * Percentage of the bar to fill between 0 and 1.
	 */
	percentage: number;
}

const PercentageBar = ({ percentage }: PercentageBarProps) => {
	percentage = clamp(percentage, 0, 1);

	return (
		<div className="max-w-full h-5 w-full rounded-full bg-[#B1B1B1]">
			<div
				className={`h-5 rounded-full bg-blue-500`}
				style={{ width: `${percentage * 100}%` }}
			></div>
		</div>
	);
};

export default PercentageBar;
