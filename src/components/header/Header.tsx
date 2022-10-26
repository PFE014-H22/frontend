import Link from './link/Link';

export interface HeaderProps {}

const Header = ({}: HeaderProps) => {
	return (
		<div className="flex justify-end">
			<ul className="flex justify-between gap-2">
				<Link href="/">Home</Link>
				<Link href="/about">About</Link>
				<Link href="/help">Help</Link>
			</ul>
		</div>
	);
};

export default Header;
