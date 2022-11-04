import { ComponentMeta, ComponentStory } from '@storybook/react';
import ParameterRecap from './ParameterRecap';

export default {
	title: 'Details/ParameterRecap',
	component: ParameterRecap,
} as ComponentMeta<typeof ParameterRecap>;

const Template: ComponentStory<typeof ParameterRecap> = args => (
	<ParameterRecap {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
	similarity_score: 0.21544325589298968,
	parameter: {
		name: 'Parameter',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus ratione soluta eaque veniam, pariatur ducimus fugiat necessitatibus doloribus accusantium tenetur.',
		matches: 3,
	},
};
