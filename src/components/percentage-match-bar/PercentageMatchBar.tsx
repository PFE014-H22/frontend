import { useCallback } from 'react';
import { clamp } from '../../lib/clamp';
import PercentageBar, {
	PercentageBarProps,
} from '../percentage-bar/PercentageBar';

export interface PercentageMatchBarProps
	extends Omit<PercentageBarProps, 'color'> {}

const COLORS = {
	10: 'bg-[#00FF00]',
	9: 'bg-[#33ff00]',
	8: 'bg-[#66ff00]',
	7: 'bg-[#99ff00]',
	6: 'bg-[#ccff00]',
	5: 'bg-[#ffff00]',
	4: 'bg-[#ffcc00]',
	3: 'bg-[#ff9900]',
	2: 'bg-[#ff6600]',
	1: 'bg-[#ff3300]',
	0: 'bg-[#ff0000]',
};

type ColorsKey = keyof typeof COLORS;

const PercentageMatchBar = (props: PercentageMatchBarProps) => {
	const percentage = clamp(props.percentage, 0, 1);

	const getPercentageMatchBarColor = useCallback(() => {
		return COLORS[Math.round(percentage * 10) as ColorsKey];
	}, [percentage]);

	return <PercentageBar color={getPercentageMatchBarColor()} {...props} />;
};

export default PercentageMatchBar;
