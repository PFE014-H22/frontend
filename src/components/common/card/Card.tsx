import { ReactNode } from 'react';
import { COLOR_SCHEME } from '../../../styles/colors';
import { BorderRadius } from '../../../types/border-radius';
import { BackgroundColor } from '../../../types/colors';

/**
 * The props used to configure the the card component.
 */
export interface CardProps {
	/**
	 * The background color of the card.
	 */
	backgroundColor?: BackgroundColor;

	/**
	 * The border radius of the card.
	 */
	borderRadius?: BorderRadius;

	/**
	 * The content to show inside the card.
	 */
	children: ReactNode;
}

/**
 * Component used to wrap content inside a container.
 */
const Card = ({
	backgroundColor = COLOR_SCHEME.cardBackgroundColor,
	borderRadius = 'rounded-2xl',
	children,
}: CardProps) => {
	return (
		<div
			className={`${backgroundColor} w-full ${borderRadius} px-9 py-6 shadow-[4px_4px_10px_rgba(0,0,0,0.25)]`}
		>
			{children}
		</div>
	);
};

export default Card;
