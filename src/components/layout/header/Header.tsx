import styles from './Header.module.scss';
import Link, { LinkProps } from './link/Link';

/**
 * The props used to configure the header component.
 */
export interface HeaderProps extends Omit<LinkProps, 'children' | 'href'> {}

/**
 * Component used to display all the navigations links.
 */
const Header = (props: HeaderProps) => {
	return (
		<header className={styles.container}>
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
