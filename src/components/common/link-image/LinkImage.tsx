import Image, { ImageProps } from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';
import { UrlObject } from 'url';
import styles from './LinkImage.module.scss';

/**
 * The props used to configure the LinkImage component.
 */
export interface LinkImageProps extends ImageProps {
	/**
	 * Alternative text to display if the image cannot load properly.
	 */
	alt: ImageProps['alt'];

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
const LinkImage = ({ alt, children, href, ...props }: LinkImageProps) => {
	return (
		<div className={styles.container}>
			<Link href={href} passHref>
				<a target="_blank" rel="noopener noreferrer">
					<Image alt={alt} {...props} />
				</a>
			</Link>

			{children && (
				<figcaption className={styles.figure__caption}>
					{children}
				</figcaption>
			)}
		</div>
	);
};

export default LinkImage;
