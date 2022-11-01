import { ReactNode } from 'react';

/**
 * The props used to configure the the card component.
 */
export interface CardProps {
	/**
	 * The background color of the card.
	 * If provided, the color must either be a valid tailwind background color or a custom color in hexadecimal
	 * You can read the tailwind docs (https://tailwindcss.com/docs/background-color) for more information.
	 */
	backgroundColor?:
		| `bg-[#${string}]`
		| `bg-${string}`
		| `bg-${string}-${number}`;

	/**
	 * The content to show inside the card
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
