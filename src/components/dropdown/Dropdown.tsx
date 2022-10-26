import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectProps } from '@mui/material/Select';
import { SelectChangeEvent } from '@mui/material/Select/SelectInput';
import { ReactNode, useCallback, useState } from 'react';

export interface Option {
	key: string;
	value: string;
}

export interface DropdownProps {
	label?: string;
	onChange?: SelectProps<string>['onChange'];
	options?: Option[];
}

const Dropdown = ({ label, options, onChange, ...props }: DropdownProps) => {
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
			<Select
				label={label}
				value={value}
				onChange={onSelectionChange}
				{...props}
			>
				{options?.map(option => (
					<MenuItem key={option.key} value={option.key}>
						{option.value}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};

export default Dropdown;
