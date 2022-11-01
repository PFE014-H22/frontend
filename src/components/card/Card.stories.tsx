import { ComponentStory, ComponentMeta } from '@storybook/react';
import { COLOR_SCHEME } from '../../styles/colors';
import Card from './Card';

export default {
	title: 'Common/Card',
	component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = args => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	backgroundColor: COLOR_SCHEME.cardBackgroundColor,
	children: 'This is some content',
};
