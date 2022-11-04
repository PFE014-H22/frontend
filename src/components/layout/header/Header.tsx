import styles from './Header.module.scss';
import Link, { LinkProps } from './link/Link';
import { useSelectedRoutes } from '../../../hooks/useSelectedRoutes';
import Image from 'next/image';
import NextLink from 'next/link';

/**
 * The props used to configure the header component.
 */
export interface HeaderProps extends Omit<LinkProps, 'children' | 'href'> {}

/**
 * Component used to display all the navigations links.
 */
const Header = (props: HeaderProps) => {
	const { isSelected: isHomePage } = useSelectedRoutes(['/']);

	return (
		<header className={isHomePage ? styles.no_logo : styles.container}>
			{!isHomePage && (
				<NextLink href="/" passHref>
					<a>
						<div className={styles.logo__wrapper}>
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

			<ul className={styles.links}>
				<Link href="/" {...props}>
					Home
				</Link>

				<Link href="/about" {...props}>
					About
				</Link>

				<Link href="/help" {...props}>
					Help
				</Link>
			</ul>
		</header>
	);
};

export default Header;
