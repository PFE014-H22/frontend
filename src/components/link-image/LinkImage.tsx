import Image, { ImageProps } from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';
import { UrlObject } from 'url';

/**
 * The props used to configure the LinkImage component.
 */
export interface LinkImageProps extends ImageProps {
	/**
	 * The optional text to show under the image.
	 */
	children?: ReactNode;

	/**
	 * The href attribute of the link.
	 */
	href: UrlObject | string;
}

/**
 * Component used to display a navigation link inside an image.
 */
const LinkImage = ({ children, href, ...props }: LinkImageProps) => {
	return (
		<div className="flex flex-col items-center">
			<Link href={href} passHref>
				<a target="_blank" rel="noopener noreferrer">
					<Image {...props} />
				</a>
			</Link>

			{children && (
				<figcaption className="text-base font-normal">
					{children}
				</figcaption>
			)}
		</div>
	);
};

export default LinkImage;
