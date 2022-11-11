import { ComponentMeta, ComponentStory } from '@storybook/react';
import AnswerMatch from './AnswerMatch';

export default {
	title: 'Search/AnswerMatch',
	component: AnswerMatch,
} as ComponentMeta<typeof AnswerMatch>;

const Template: ComponentStory<typeof AnswerMatch> = args => (
	<AnswerMatch {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
	matches: 3,
	similarity_score: 0.21544325589298968,
};
