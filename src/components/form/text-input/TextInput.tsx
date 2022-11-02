import { HTMLAttributes, InputHTMLAttributes } from 'react';
import { COLOR_SCHEME } from '../../../styles/colors';
import {
	BackgroundColor,
	PlaceholderColor,
	TextColor,
} from '../../../types/colors';

/**
 * The props used to configure the input text component.
 */
export interface TextInputProps {
	/**
	 * The background color of the text input.
	 */
	backgroundColor?: BackgroundColor;

	/**
	 * Id of the html select element.
	 */
	id?: HTMLAttributes<HTMLInputElement>['id'];

	/**
	 * Name of the html input element.
	 */
	name?: InputHTMLAttributes<HTMLInputElement>['name'];

	/**
	 * Event listener when a new text value is emitted.
	 */
	onChange?: InputHTMLAttributes<HTMLInputElement>['onChange'];

	/**
	 * The placeholder text to display when there is no text entered.
	 */
	placeholder?: InputHTMLAttributes<HTMLInputElement>['placeholder'];

	/**
	 * The color to display the placeholder text with.
	 */
	placeholderColor?: PlaceholderColor;

	/**
	 * Indicates whether the text value is required in the form.
	 */
	required?: InputHTMLAttributes<HTMLInputElement>['required'];

	/**
	 * The color to display the input text with.
	 */
	textColor?: TextColor;

	/**
	 * Attribute specifying the type of the input element.
	 * More information available at https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
	 */
	type?: InputHTMLAttributes<HTMLInputElement>['type'];
}

/**
 * Component used to display a text input.
 */
const TextInput = ({
	backgroundColor = COLOR_SCHEME.textInputBackgroundColor,
	placeholderColor = COLOR_SCHEME.textInputPlaceHolderTextColor,
	textColor = COLOR_SCHEME.textInputTextColor,
	...props
}: TextInputProps) => {
	return (
		<input
			className={`rounded-full ${backgroundColor} px-4 py-2 ${textColor} max-w-[100%] ${placeholderColor}`}
			{...props}
		/>
	);
};

export default TextInput;
