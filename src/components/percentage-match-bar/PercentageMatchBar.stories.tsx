import { ComponentStory, ComponentMeta } from '@storybook/react';
import { COLOR_SCHEME } from '../../styles/colors';
import PercentageMatchBar from './PercentageMatchBar';

export default {
	title: 'Match/PercentageMatchBar',
	component: PercentageMatchBar,
} as ComponentMeta<typeof PercentageMatchBar>;

const Template: ComponentStory<typeof PercentageMatchBar> = args => (
	<div className="max-w-xs">
		<PercentageMatchBar {...args} />
	</div>
);

export const Primary = Template.bind({});
Primary.args = {
	percentage: 0.5,
	backgroundColor: COLOR_SCHEME.percentageBarBackgroundColor,
};
