import SearchIcon from '@mui/icons-material/Search';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button from './Button';

export default {
	title: 'Common/Button',
	component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	children: <SearchIcon />,
};
