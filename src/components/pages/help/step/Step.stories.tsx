import { ComponentMeta, ComponentStory } from '@storybook/react';
import Step from './Step';

export default {
	title: 'Help/Step',
	component: Step,
} as ComponentMeta<typeof Step>;

const Template: ComponentStory<typeof Step> = args => <Step {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	stepIndex: 0,
	children: 'You need to brew yourself a nice cup of coffee',
};
