import { ClassAttributes, InputHTMLAttributes } from 'react';

export interface TextInputProps {
	placeholder?: InputHTMLAttributes<HTMLInputElement>['placeholder'];
	ref?: ClassAttributes<HTMLInputElement>['ref'];
	type?: InputHTMLAttributes<HTMLInputElement>['type'];
}

const TextInput = (props: TextInputProps) => {
	return (
		<input
			className="rounded-full bg-[#c5c5c5] px-4 py-2 placeholder:text-black max-w-[100%]"
			{...props}
		/>
	);
};

export default TextInput;
