import { ComponentStory, ComponentMeta } from '@storybook/react';
import { COLOR_SCHEME } from '../../styles/colors';
import Button from './Button';

export default {
	title: 'Form/Button',
	component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	backgroundColor: COLOR_SCHEME.buttonBackgroundColor,
	children: 'Button',
	textColor: COLOR_SCHEME.buttonTextColor,
};
