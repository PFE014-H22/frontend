import { ClassAttributes, InputHTMLAttributes } from 'react';

/**
 * The props used to configure the input text component.
 */
export interface TextInputProps {
	/**
	 * The background color of the text input.
	 * If provided, the color must either be a valid tailwind background color or a custom color in hexadecimal
	 * You can read the tailwind docs (https://tailwindcss.com/docs/background-color) for more information.
	 */
	backgroundColor?:
		| `bg-[#${string}]`
		| `bg-${string}`
		| `bg-${string}-${number}`;

	/**
	 * The placeholder text to display when there is no text entered.
	 */
	placeholder?: InputHTMLAttributes<HTMLInputElement>['placeholder'];

	/**
	 * The color to display the input text with.
	 * If provided, the color must either be a valid tailwind text color or a custom color in hexadecimal.
	 * You can read the tailwind docs (https://tailwindcss.com/docs/text-color) for more information.
	 */
	textColor?:
		| `text-[#${string}]`
		| `text-${string}`
		| `text-${string}-${number}`;

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
			className={`rounded-full ${backgroundColor} px-4 py-2 ${textColor} placeholder:text-red-400 max-w-[100%]`}
			{...props}
		/>
	);
};

export default TextInput;
