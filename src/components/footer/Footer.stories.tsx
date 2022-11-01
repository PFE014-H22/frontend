import { ComponentStory, ComponentMeta } from '@storybook/react';
import { COLOR_SCHEME } from '../../styles/colors';
import Footer from './Footer';

export default {
	title: 'Common/Footer',
	component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = args => <Footer {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	textColor: COLOR_SCHEME.footerTextColor,
};
