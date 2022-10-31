import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectProps } from '@mui/material/Select';
import { SelectChangeEvent } from '@mui/material/Select/SelectInput';
import { ReactNode, useCallback, useState } from 'react';
import Option, { OptionProps } from './option/Option';

/**
 * The props used to configure the dropdown component
 */
export interface DropdownProps {
	/**
	 * Placeholder to display when no option is selected in the dropdown.
	 */
	label?: string;

	/**
	 * Event listener when a new option is selected.
	 */
	onChange?: SelectProps<string>['onChange'];

	/**
	 * List of options that can be selected with the dropdown menu.
	 */
	options?: { key: string; value: string }[];
}

/**
 * Component used to display a dropdown menu of different options.
 */
const Dropdown = ({ label, onChange, options }: DropdownProps) => {
	const [value, setValue] = useState('');

	const onSelectionChange = useCallback(
		(e: SelectChangeEvent<string>, child: ReactNode) => {
			e.preventDefault();
			setValue(e.target.value);
			if (onChange === undefined) return;
			onChange(e, child);
		},
		[],
	);

	return (
		<FormControl fullWidth>
			<InputLabel>{label}</InputLabel>
			<Select label={label} value={value} onChange={onSelectionChange}>
				{options?.map(option => (
					<Option {...option}>{option.value}</Option>
				))}
			</Select>
		</FormControl>
	);
};

export default Dropdown;
