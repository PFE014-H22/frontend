import Image from 'next/image';
import { TextColor } from '../../types/colors';

/**
 * The props used to configure the footer component.
 */
export interface FooterProps {
	/**
	 * The color to display the footer text with.
	 */
	textColor?: TextColor;
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
