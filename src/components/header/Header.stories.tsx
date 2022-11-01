import { ComponentStory, ComponentMeta } from '@storybook/react';
import { COLOR_SCHEME } from '../../styles/colors';
import Header from './Header';

export default {
	title: 'Common/Header',
	component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = args => <Header {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	selectedBackgroundColor: COLOR_SCHEME.headerLinkSelectedColor,
	textColor: COLOR_SCHEME.headerLinkTextColor,
};
