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
		id: '1',
		parameter: 'Parameter',
		similarity_score: 0.5,
		matches: 7,
		sources: [
			{
				link: '#',
				name: 'stackoverflow',
				moreDetails: {
					answer_id: 1,
					question_id: '1',
					body: '<b>Body</b>',
					is_accepted: true,
					tags: ['Tag 1', 'Tag 2', 'Tag 3'],
				},
			},
		],
	},
	searchTerm: 'Search Term',
	technology: 'Technology',
};
