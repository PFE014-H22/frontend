import { ComponentStory, ComponentMeta } from '@storybook/react';
import Option from './Option';

export default {
	title: 'Form/DropdownOption',
	component: Option,
} as ComponentMeta<typeof Option>;

const Template: ComponentStory<typeof Option> = args => (
	<div className="max-w-xs">
		<Option {...args} />
	</div>
);

export const Primary = Template.bind({});
Primary.args = {
	key: 'CHOICE_ONE',
	value: 'Choice 1',
	children: <strong>Choice 1</strong>,
};
