import { ComponentMeta, ComponentStory } from '@storybook/react';
import HorizontalDivider from './HorizontalDivider';

export default {
	title: 'Layout/HorizontalDivider',
	component: HorizontalDivider,
} as ComponentMeta<typeof HorizontalDivider>;

const Template: ComponentStory<typeof HorizontalDivider> = () => (
	<HorizontalDivider />
);

export const Primary = Template.bind({});
Primary.args = {};
