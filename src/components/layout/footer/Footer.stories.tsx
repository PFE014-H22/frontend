import { ComponentMeta, ComponentStory } from '@storybook/react';
import Footer from './Footer';

export default {
	title: 'Layout/Footer',
	component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = () => <Footer />;

export const Primary = Template.bind({});
Primary.args = {};
