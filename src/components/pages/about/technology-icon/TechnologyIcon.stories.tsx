import { ComponentMeta, ComponentStory } from '@storybook/react';
import TechnologyIcon from './TechnologyIcon';

export default {
	title: 'About/TechnologyIcon',
	component: TechnologyIcon,
} as ComponentMeta<typeof TechnologyIcon>;

const Template: ComponentStory<typeof TechnologyIcon> = args => (
	<TechnologyIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
	href: '#',
	name: 'Gear Technology',
	src: '/icon.png',
};
