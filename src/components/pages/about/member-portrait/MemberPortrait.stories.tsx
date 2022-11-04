import { ComponentMeta, ComponentStory } from '@storybook/react';
import MemberPortrait from './MemberPortrait';

export default {
	title: 'About/MemberPortrait',
	component: MemberPortrait,
} as ComponentMeta<typeof MemberPortrait>;

const Template: ComponentStory<typeof MemberPortrait> = args => (
	<MemberPortrait {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
	href: '#',
	memberName: 'Mister Member',
	src: '/user.svg',
};
