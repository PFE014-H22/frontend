import { ButtonHTMLAttributes, DOMAttributes, ReactNode } from 'react';
import styles from './Button.module.scss';

/**
 * The props used to configure the button.
 */
export interface ButtonProps {
	/**
	 * The content to show inside the button.
	 */
	children: ReactNode;

	/**
	 * Event listener for the onClick event from the button.
	 */
	onClick?: DOMAttributes<HTMLButtonElement>['onClick'];

	/**
	 * Html attribute for the button type.
	 */
	type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
}

/**
 * Component defining a wrapper for the button html element.
 */
const Button = ({ children, ...props }: ButtonProps) => {
	return (
		<button className={styles.container} {...props}>
			{children}
		</button>
	);
};

export default Button;
