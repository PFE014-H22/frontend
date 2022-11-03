import { ComponentMeta, ComponentStory } from '@storybook/react';
import PercentageBar from './PercentageBar';

export default {
	title: 'Common/PercentageBar',
	component: PercentageBar,
} as ComponentMeta<typeof PercentageBar>;

const Template: ComponentStory<typeof PercentageBar> = args => (
	<div style={{ maxWidth: '500px' }}>
		<PercentageBar {...args} />
	</div>
);

export const Primary = Template.bind({});
Primary.args = {
	percentage: 0.5,
};
