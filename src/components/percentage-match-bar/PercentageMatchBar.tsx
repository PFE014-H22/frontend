import { useCallback } from 'react';
import { clamp } from '../../lib/clamp';
import PercentageBar, {
	PercentageBarProps,
} from '../percentage-bar/PercentageBar';

/**
 * The props used to configure the percentage match bar component.
 */
export interface PercentageMatchBarProps
	extends Omit<PercentageBarProps, 'fillColor'> {}

/**
 * Shades of color to use as a gradient for the percentage match bar.
 * Goes from red all the way to green.
 */
const COLORS: Record<
	number,
	`bg-[#${string}]` | `bg-${string}` | `bg-${string}-${number}`
> = {
	0: 'bg-[#ff0000]',
	1: 'bg-[#ff3300]',
	2: 'bg-[#ff6600]',
	3: 'bg-[#ff9900]',
	4: 'bg-[#ffcc00]',
	5: 'bg-[#ffff00]',
	6: 'bg-[#ccff00]',
	7: 'bg-[#99ff00]',
	8: 'bg-[#66ff00]',
	9: 'bg-[#33ff00]',
	10: 'bg-[#00ff00]',
};

/**
 * Utility type to retrieve the keys of the COLORS constant.
 */
type ColorsKey = keyof typeof COLORS;

/**
 * Component wrapping the PercentageBar and displays a different color depending on
 * the percentage filled.
 */
const PercentageMatchBar = (props: PercentageMatchBarProps) => {
	const percentage = clamp(props.percentage, 0, 1);

	const getPercentageMatchBarColor = useCallback(() => {
		return COLORS[Math.round(percentage * 10) as ColorsKey];
	}, [percentage]);

	return <PercentageBar fillColor={getPercentageMatchBarColor()} {...props} />;
};

export default PercentageMatchBar;
