import { ComponentMeta, ComponentStory } from '@storybook/react';
import DropdownLinks from './DropdownLinks';

export default {
	title: 'Layout/DropdownLinks',
	component: DropdownLinks,
} as ComponentMeta<typeof DropdownLinks>;

const Template: ComponentStory<typeof DropdownLinks> = args => <DropdownLinks {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
