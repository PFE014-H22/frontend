import { ComponentStory, ComponentMeta } from '@storybook/react';
import { COLOR_SCHEME } from '../../../styles/colors';
import Link from './Link';

export default {
	title: 'Common/Link',
	component: Link,
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = args => <Link {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	href: '/',
	children: 'Link',
	selectedBackgroundColor: COLOR_SCHEME.headerLinkSelectedColor,
	textColor: COLOR_SCHEME.headerLinkTextColor,
};
