import Image from 'next/image';

/**
 * The props used to configure the footer componenté
 */
export interface FooterProps {
	/**
	 * The color to display the link text with.
	 * If provided, the color must either be a valid tailwind text color or a custom color in hexadecimal.
	 * You can read the tailwind docs (https://tailwindcss.com/docs/text-color) for more information.
	 */
	textColor?:
		| `text-[#${string}]`
		| `text-${string}`
		| `text-${string}-${number}`;
}

/**
 * Component used to display a common footer for each page.
 */
const Footer = ({ textColor }: FooterProps) => {
	return (
		<footer className="flex flex-row items-center justify-center gap-2">
			<Image src="/Logo_ETS.jpg" width={48} height={48} />
			<p className={`text-2xl font-normal leading-7 ${textColor}`}>
				École de technologie supérieure, 2022
			</p>
		</footer>
	);
};

export default Footer;
