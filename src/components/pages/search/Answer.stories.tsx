import { ComponentMeta, ComponentStory } from '@storybook/react';
import AnswerCard from './AnswerCard';

export default {
	title: 'Search/AnswerCard',
	component: AnswerCard,
} as ComponentMeta<typeof AnswerCard>;

const Template: ComponentStory<typeof AnswerCard> = args => (
	<AnswerCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
	answer: {
		answer_id: 1,
		body: '#',
		is_accepted: true,
		link: '#',
		parameters: [],
		question_id: '1',
		similarity_score: 0.25,
		source: 'stackoverflow',
		tags: [],
	},
	searchTerm: 'Search',
	technology: 'Technology',
};
