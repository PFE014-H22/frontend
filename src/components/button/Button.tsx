import { ButtonHTMLAttributes, DOMAttributes, ReactNode } from 'react';

interface ButtonProps {
	children: ReactNode;
	type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
	onClick?: DOMAttributes<HTMLButtonElement>['onClick'];
}

const Button = ({ children, ...props }: ButtonProps) => {
	return (
		<button
			className="hover:scale-105 rounded-2xl bg-blue-500 px-4 py-2 font-medium text-white outline-1 outline-slate-700"
			{...props}
		>
			{children}
		</button>
	);
};

export default Button;
