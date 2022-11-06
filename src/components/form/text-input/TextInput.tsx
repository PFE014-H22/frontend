import { HTMLAttributes, InputHTMLAttributes } from 'react';
import styles from './TextInput.module.scss';

/**
 * The props used to configure the input text component.
 */
export interface TextInputProps {
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
	 * Indicates whether the text value is required in the form.
	 */
	required?: InputHTMLAttributes<HTMLInputElement>['required'];

	/**
	 * Attribute specifying the type of the input element.
	 * More information available at https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
	 */
	type?: InputHTMLAttributes<HTMLInputElement>['type'];
}

/**
 * Component used to display a text input.
 */
const TextInput = ({ ...props }: TextInputProps) => {
	return <input className={styles.container} {...props} />;
};

export default TextInput;
