import { ReactNode } from 'react';
import styles from './Step.module.scss';

/**
 * The props used to configure the `Step` component.
 */
export interface StepProps {
	/**
	 * Content to display for the current step.
	 */
	children: ReactNode;

	/**
	 * The ordinal number of the current step.
	 */
	stepIndex: number;
}

/**
 * Component used to display a single step in the `/help` endpoint.
 */
const Step = ({ children, stepIndex }: StepProps) => {
	return (
		<div className={styles.container}>
			<span className={styles.step__index}>Step {stepIndex}</span>
			{children}
		</div>
	);
};

export default Step;
