import { ComponentMeta, ComponentStory } from '@storybook/react';
import HorizontalLinks from './HorizontalLinks';

export default {
	title: 'Layout/HorizontalLinks',
	component: HorizontalLinks,
} as ComponentMeta<typeof HorizontalLinks>;

const Template: ComponentStory<typeof HorizontalLinks> = args => <HorizontalLinks {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
