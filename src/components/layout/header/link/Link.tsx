import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { ReactNode } from 'react';
import { UrlObject } from 'url';
import { useSelectedRoutes } from '../../../../hooks/useSelectedRoutes';
import styles from './Link.module.scss';

/**
 * The props used to configure the navigation links of the header component.
 */
export interface LinkProps extends Omit<NextLinkProps, 'href' | 'passHref'> {
	/**
	 * The content to show inside the link.
	 */
	children?: ReactNode;

	/**
	 * The href attribute of the link.
	 */
	href: string | UrlObject;
}

/**
 * Component used to display a single navigation link in the header component.
 */
const Link = ({ children, ...props }: LinkProps) => {
	const { isSelected } = useSelectedRoutes([props.href]);

	return (
		<li className={styles.container}>
			<NextLink passHref {...props}>
				<a
					className={`${styles.link} ${
						isSelected ? styles.selected : ''
					}`}
				>
					{children}
				</a>
			</NextLink>
		</li>
	);
};

export default Link;
