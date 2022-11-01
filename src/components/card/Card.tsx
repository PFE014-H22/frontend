import { ReactNode } from 'react';
import { BackgroundColor } from '../../types/colors';

/**
 * The props used to configure the the card component.
 */
export interface CardProps {
	/**
	 * The background color of the card.
	 */
	backgroundColor?: BackgroundColor;

	/**
	 * The content to show inside the card.
	 */
	children: ReactNode;
}

/**
 * Component used to wrap content inside a container.
 */
const Card = ({ backgroundColor, children }: CardProps) => {
	return (
		<div
			className={`${backgroundColor} max-w-fit rounded-2xl  px-9 py-6 shadow-[4px_4px_10px_rgba(0,0,0,0.25)]`}
		>
			{children}
		</div>
	);
};

export default Card;
