import { ComponentMeta, ComponentStory } from '@storybook/react';
import Option from './Option';

export default {
	title: 'Form/DropdownOption',
	component: Option,
} as ComponentMeta<typeof Option>;

const Template: ComponentStory<typeof Option> = args => (
	<div style={{ maxWidth: '500px' }}>
		<Option {...args} />
	</div>
);

export const Primary = Template.bind({});
Primary.args = {
	key: 'CHOICE_ONE',
	value: 'Choice 1',
	children: <strong>Choice 1</strong>,
};
