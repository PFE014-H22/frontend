import { ComponentMeta, ComponentStory } from '@storybook/react';
import LoadingSkeleton from './LoadingSkeleton';

export default {
	title: 'Common/LoadingSkeleton',
	component: LoadingSkeleton,
} as ComponentMeta<typeof LoadingSkeleton>;

const Template: ComponentStory<typeof LoadingSkeleton> = args => (
	<div style={{ maxWidth: '500px' }}>
		<LoadingSkeleton {...args} />
	</div>
);

export const Primary = Template.bind({});
Primary.args = {
    skeletonWidth: 300, 
    skeletonHeight: 120 
};