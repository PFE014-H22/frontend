import { DOMAttributes, ReactNode } from 'react';
import styles from './Card.module.scss';

/**
 * The props used to configure the the card component.
 */
export interface CardProps {
	/**
	 * The content to show inside the card.
	 */
	children: ReactNode;

	/**
	 * OnClick event handler for the card.
	 */
	onClick?: DOMAttributes<HTMLDivElement>['onClick'];
}

/**
 * Component used to wrap content inside a container.
 */
const Card = ({ children, onClick }: CardProps) => {
	return (
		<div className={styles.container} onClick={onClick}>
			{children}
		</div>
	);
};

export default Card;
