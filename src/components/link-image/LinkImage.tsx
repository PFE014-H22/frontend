import Image, { ImageProps } from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';
import { UrlObject } from 'url';

export interface LinkImageProps extends ImageProps {
	href: UrlObject | string;
	children?: ReactNode;
}

const LinkImage = ({ children, href, ...props }: LinkImageProps) => {
	return (
		<div className="flex flex-col items-center">
			<Link href={href} passHref>
				<a target="_blank" rel="noopener noreferrer">
					<Image {...props}></Image>
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
