import styles from './Header.module.scss';
import { LinkProps } from './link/Link';
import { useSelectedRoutes } from '../../../hooks/useSelectedRoutes';
import Image from 'next/image';
import NextLink from 'next/link';
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import HorizontalLinks from './horizontal-links/HorizontalLinks';
import DropdownLinks from './dropdown-links/DropdownLinks';

/**
 * The props used to configure the header component.
 */
export interface HeaderProps extends Omit<LinkProps, 'children' | 'href'> {}

/**
 * Component used to display all the navigations links.
 */
const Header = (props: HeaderProps) => {
	const { isSelected: isHomePage } = useSelectedRoutes(['/']);

	// Target width
	const isMaxWidth = useMediaQuery(450);

	return (
		<header className={isHomePage ? styles.no_logo : styles.container}>
			{!isHomePage && (
				<NextLink href="/" passHref>
					<a>
						<div className={styles.logo_wrapper}>
							<Image
								src="/dopamine.svg"
								height={36}
								width={108}
								alt="Dopamine Logo"
							/>
						</div>
					</a>
				</NextLink>
			)}
			{isMaxWidth ? (
				<DropdownLinks {...props}/>
			) : (
				<HorizontalLinks {...props}/>
			)}
		</header>
	);
};

export default Header;
