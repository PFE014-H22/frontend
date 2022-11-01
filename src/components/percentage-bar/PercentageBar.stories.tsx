import { ComponentStory, ComponentMeta } from '@storybook/react';
import { COLOR_SCHEME } from '../../styles/colors';
import PercentageBar from './PercentageBar';

export default {
	title: 'Common/PercentageBar',
	component: PercentageBar,
} as ComponentMeta<typeof PercentageBar>;

const Template: ComponentStory<typeof PercentageBar> = args => (
	<div className="max-w-xs">
		<PercentageBar {...args} />
	</div>
);

export const Primary = Template.bind({});
Primary.args = {
	backgroundColor: COLOR_SCHEME.percentageBarBackgroundColor,
	fillColor: 'bg-blue-500',
	percentage: 0.5,
};
