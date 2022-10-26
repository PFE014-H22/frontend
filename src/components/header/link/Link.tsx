import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode, useMemo } from 'react';
import { UrlObject } from 'url';

export interface LinkProps {
	children?: ReactNode;
	href: string | UrlObject;
}

const Link = ({ children, ...props }: LinkProps) => {
	const { pathname } = useRouter();

	const isSelected = useMemo(() => {
		return pathname === props.href;
	}, [pathname]);

	const color = useMemo(() => {
		if (isSelected) return 'bg-[#c5c5c5]';
		return '';
	}, [isSelected]);

	return (
		<li className="list-none">
			<NextLink passHref {...props} className="">
				<a
					className={`rounded-full px-4 py-2 text-2xl font-normal hover:bg-opacity-90 ${color}`}
				>
					{children}
				</a>
			</NextLink>
		</li>
	);
};

export default Link;
