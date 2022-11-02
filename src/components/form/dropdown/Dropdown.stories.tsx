import { ComponentStory, ComponentMeta } from '@storybook/react';
import Dropdown from './Dropdown';

export default {
	title: 'Form/Dropdown',
	component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = args => (
	<div className="max-w-xs">
		<Dropdown {...args} />
	</div>
);

export const Primary = Template.bind({});
Primary.args = {
	label: 'Choices',
	options: [
		{ key: 'CHOICE_ONE', value: 'Choice 1' },
		{ key: 'CHOICE_TWO', value: 'Choice 2' },
		{ key: 'CHOICE_THREE', value: 'Choice 3' },
	],
};
