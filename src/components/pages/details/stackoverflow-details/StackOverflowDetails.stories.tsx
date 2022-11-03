import { ComponentMeta, ComponentStory } from '@storybook/react';
import StackOverflowDetails from './StackOverflowDetails';

export default {
	title: 'Details/StackOverflowDetails',
	component: StackOverflowDetails,
} as ComponentMeta<typeof StackOverflowDetails>;

const Template: ComponentStory<typeof StackOverflowDetails> = args => (
	<StackOverflowDetails {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
	source: {
		answer_id: 8705014,
		question_body:
			'<p>I tried to to this but it did not work, what am i doing wrong?</p>',
		response_body:
			'<p>Take a look at the following:</p>\n\n<p><a href="https://github.com/winglian/SSTable2S3" rel="nofollow">https://github.com/winglian/SSTable2S3</a></p>\n',
		is_accepted: true,
		link: 'https://stackoverflow.com/questions/8703370/does-any-way-to-automate-snaphot-processing-for-cassandra-on-the-aws/8705014#8705014',
		name: 'stackoverflow' as const,
		question_id: '8703370',
		question_title: 'How do i do this?',
		similarity_score: 0.21544325589298968,
		tags: ['Tag 1', 'Tag 2', 'Tag 3'],
	},
};
