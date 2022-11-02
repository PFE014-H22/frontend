import { ButtonHTMLAttributes, DOMAttributes, ReactNode } from 'react';
import { COLOR_SCHEME } from '../../../styles/colors';
import { BorderRadius } from '../../../types/border-radius';
import { BackgroundColor, TextColor } from '../../../types/colors';

/**
 * The props used to configure the button.
 */
export interface ButtonProps {
	/**
	 * The background color of the button.
	 */
	backgroundColor?: BackgroundColor;

	/**
	 * The border radius of the button.
	 */
	borderRadius?: BorderRadius;

	/**
	 * The content to show inside the button.
	 */
	children: ReactNode;

	/**
	 * Event listener for the onClick event from the button.
	 */
	onClick?: DOMAttributes<HTMLButtonElement>['onClick'];

	/**
	 * The color to display the button text with.
	 */
	textColor?: TextColor;

	/**
	 * Html attribute for the button type.
	 */
	type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
}

/**
 * Component defining a wrapper for the button html element, styled with tailwind.
 */
const Button = ({
	backgroundColor = COLOR_SCHEME.buttonBackgroundColor,
	borderRadius = 'rounded-full',
	children,
	textColor = COLOR_SCHEME.buttonTextColor,
	...props
}: ButtonProps) => {
	return (
		<button
			className={`${backgroundColor} ${textColor} ${borderRadius} px-4 py-2 font-medium outline-1 outline-slate-700 hover:scale-105`}
			{...props}
		>
			{children}
		</button>
	);
};

export default Button;
