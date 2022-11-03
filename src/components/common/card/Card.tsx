import { ReactNode } from 'react';
import styles from './Card.module.scss';

/**
 * The props used to configure the the card component.
 */
export interface CardProps {
	/**
	 * The content to show inside the card.
	 */
	children: ReactNode;
}

/**
 * Component used to wrap content inside a container.
 */
const Card = ({ children }: CardProps) => {
	return <div className={styles.container}>{children}</div>;
};

export default Card;
