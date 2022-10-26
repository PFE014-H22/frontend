import { ReactNode } from 'react';

export interface CardProps {
	children: ReactNode;
}

const Card = ({ children }: CardProps) => {
	return (
		<div className="max-w-fit rounded-2xl bg-[#C6C6C6] px-9 py-6 shadow-[4px_4px_10px_rgba(0,0,0,0.25)]">
			{children}
		</div>
	);
};

export default Card;
