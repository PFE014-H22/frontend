import { ComponentMeta, ComponentStory } from '@storybook/react';
import Link from './Link';

export default {
	title: 'Layout/Link',
	component: Link,
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = args => <Link {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	href: '/',
	children: 'Link',
};
