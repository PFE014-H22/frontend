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
		<div className="flex justify-end">
			<ul className="flex justify-between gap-2">
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
		</div>
	);
};

export default Header;
