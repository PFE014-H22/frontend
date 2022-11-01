import { InputHTMLAttributes } from 'react';
import { BackgroundColor, TextColor } from '../../types/colors';

/**
 * The props used to configure the input text component.
 */
export interface TextInputProps {
	/**
	 * The background color of the text input.
	 */
	backgroundColor?: BackgroundColor;

	/**
	 * The placeholder text to display when there is no text entered.
	 */
	placeholder?: InputHTMLAttributes<HTMLInputElement>['placeholder'];

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
	backgroundColor,
	textColor,
	...props
}: TextInputProps) => {
	return (
		<input
			className={`rounded-full ${backgroundColor} px-4 py-2 ${textColor} max-w-[100%] placeholder:text-red-400`}
			{...props}
		/>
	);
};

export default TextInput;
