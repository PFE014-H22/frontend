import { ComponentStory, ComponentMeta } from '@storybook/react';
import PercentageMatchBar from './PercentageMatchBar';

export default {
	title: 'Common/PercentageMatchBar',
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
};
