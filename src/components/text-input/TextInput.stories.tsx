import { ComponentStory, ComponentMeta } from '@storybook/react';
import TextInput from './TextInput';

export default {
	title: 'Form/TextInput',
	component: TextInput,
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = args => (
	<TextInput {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
	placeholder: 'Placeholder...',
};
