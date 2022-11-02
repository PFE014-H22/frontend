import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectProps } from '@mui/material/Select';
import { SelectChangeEvent } from '@mui/material/Select/SelectInput';
import { ReactNode, useCallback, useState } from 'react';
import { BorderRadius } from '../../../types/border-radius';
import Option, { OptionProps } from './option/Option';

/**
 * The props used to configure the dropdown component.
 */
export interface DropdownProps {
	/**
	 * Html select element border-radius.
	 */
	borderRadius?: BorderRadius;

	/**
	 * Id of the html select element.
	 */
	id?: SelectProps<string>['id'];

	/**
	 * Placeholder to display when no option is selected in the dropdown.
	 */
	label?: string;

	/**
	 * Name of the html select element.
	 */
	name?: string;

	/**
	 * Event listener when a new option is selected.
	 */
	onChange?: SelectProps<string>['onChange'];

	/**
	 * List of options that can be selected with the dropdown menu.
	 */
	options?: Omit<OptionProps, 'children'>[];

	/**
	 * Indicates whether the dropdown value is required in the form.
	 */
	required?: boolean;
}

/**
 * Component used to display a dropdown menu of different options.
 */
const Dropdown = ({
	borderRadius = 'rounded-full',
	label,
	onChange,
	options,
	...props
}: DropdownProps) => {
	const [value, setValue] = useState('');

	const onSelectionChange = useCallback(
		(e: SelectChangeEvent<string>, child: ReactNode) => {
			e.preventDefault();
			setValue(e.target.value);
			if (onChange === undefined) return;
			onChange(e, child);
		},
		[onChange],
	);

	return (
		<FormControl fullWidth>
			<InputLabel>{label}</InputLabel>
			<Select
				className={`${borderRadius}`}
				label={label}
				value={value}
				onChange={onSelectionChange}
				{...props}
			>
				{options?.map(({ key, ...option }) => (
					<Option key={key} {...option}>
						{option.value}
					</Option>
				))}
			</Select>
		</FormControl>
	);
};

export default Dropdown;
