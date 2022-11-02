import Image from 'next/image';
import { COLOR_SCHEME } from '../../../styles/colors';
import { TextColor } from '../../../types/colors';

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
const Footer = ({ textColor = COLOR_SCHEME.footerTextColor }: FooterProps) => {
	return (
		<footer className="flex flex-row items-center justify-center gap-2">
			<Image src="/Logo_ETS.png" width={48} height={48} />
			<p className={`text-2xl leading-7 ${textColor}`}>
				École de technologie supérieure, 2022
			</p>
		</footer>
	);
};

export default Footer;
