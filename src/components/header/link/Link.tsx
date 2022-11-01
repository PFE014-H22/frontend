import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode, useMemo } from 'react';
import { UrlObject } from 'url';

/**
 * The props used to configure the navigation links of the header component
 */
export interface LinkProps {
	/**
	 * The content to show inside the link
	 */
	children?: ReactNode;

	/**
	 * The href attribute of the link
	 */
	href: string | UrlObject;

	/**
	 * The color to highlight the link with when the current route matches the href attribute
	 * If provided, the color must either be a valid tailwind background color or a custom color in hexadecimal
	 * You can read the tailwind docs (https://tailwindcss.com/docs/background-color) for more information.
	 */
	selectedBackgroundColor?:
		| `bg-[#${string}]`
		| `bg-${string}`
		| `bg-${string}-${number}`;

	/**
	 * The color to display the link text with. If provided, the color must either be a valid tailwind text color
	 * or a custom color in hexadecimal.
	 * You can read the tailwind docs (https://tailwindcss.com/docs/text-color) for more information.
	 */
	textColor?: `text-[#${string}]` | `text-${string}` |`text-${string}-${number}`;
}

/**
 * Component used to display a single navigation link in the header component.
 */
const Link = ({
	children,
	selectedBackgroundColor,
	textColor,
	...props
}: LinkProps) => {
	const { pathname } = useRouter();

	const isSelected = useMemo(() => {
		return pathname === props.href;
	}, [pathname]);

	const backgroundColor = useMemo(() => {
		if (isSelected) return selectedBackgroundColor;
		return '';
	}, [isSelected]);

	return (
		<li className="list-none">
			<NextLink passHref {...props}>
				<a
					className={`rounded-full px-4 py-1 text-2xl ${backgroundColor} ${textColor} hover:bg-opacity-90`}
				>
					{children}
				</a>
			</NextLink>
		</li>
	);
};

export default Link;
