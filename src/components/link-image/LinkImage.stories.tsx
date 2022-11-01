import { ComponentStory, ComponentMeta } from '@storybook/react';
import LinkImage from './LinkImage';

export default {
	title: 'Common/LinkImage',
	component: LinkImage,
} as ComponentMeta<typeof LinkImage>;

const Template: ComponentStory<typeof LinkImage> = args => (
	<div className="max-w-fit">
		<LinkImage {...args} />
	</div>
);

export const Primary = Template.bind({});
Primary.args = {
	href: '#',
	height: 64,
	width: 64,
	src: '/icon.png',
};

export const Tagged = Template.bind({});
Tagged.args = {
	href: '#',
	height: 64,
	width: 64,
	src: '/icon.png',
	children: 'Icon',
};
