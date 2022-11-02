import MenuItem from '@mui/material/MenuItem';
import { ReactNode } from 'react';

/**
 * Props used to configure a single dropdown option.
 */
export interface OptionProps {
	/**
	 * The text to display inside the option.
	 */
	children: ReactNode;

	/**
	 * Unique key used to identify the dropdown option.
	 */
	key: string;

	/**
	 * Display value for the dropdown option.
	 */
	value: string;
}

/**
 * Component used to display a single dropdown menu option.
 */
const Option = ({ children, ...props }: OptionProps) => {
	return <MenuItem {...props}>{children}</MenuItem>;
};

export default Option;
