import styles from './Header.module.scss';
import Link, { LinkProps } from './link/Link';
import { useSelectedRoutes } from '../../../hooks/useSelectedRoutes';
import Image from 'next/image';
import NextLink from 'next/link';
import { useState, useCallback, useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';

/**
 * The props used to configure the header component.
 */
export interface HeaderProps extends Omit<LinkProps, 'children' | 'href'> {}

/**
 * Component used to display all the navigations links.
 */
const Header = (props: HeaderProps) => {
	const { isSelected: isHomePage } = useSelectedRoutes(['/']);

	/**
	 * Media query used to detect when the screen reaches a targetted
	 * width, in order to cahnge the layout.
	 */
	const useMediaQuery = (width: number) => {
		const [targetReached, setTargetReached] = useState(false);
	
		const updateTarget = useCallback((e: { matches: any; }) => {
			if (e.matches) {
				setTargetReached(true);
				handleClose
			} else {
				setTargetReached(false);
				handleClose
			}
		}, []);
	
		useEffect(() => {
			const media = window.matchMedia(`(max-width: ${width}px)`);
			media.addEventListener("change", updateTarget)
		
			if (media.matches) {
				setTargetReached(true);
			}
		
			return () => media.removeEventListener("change", updateTarget);
		}, []);
	
		return targetReached;
	};

	// Target width
	const isMaxWidth = useMediaQuery(450);

	const [anchorElement, setAnchorElement] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorElement);

	// Sets the anchor to the parent element on click
	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElement(event.currentTarget.parentElement);
	};

	// Closes the dropdown
	const handleClose = () => {
		setAnchorElement(null);
	};

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
				<div>
					<IconButton
						id="dropdown-button"
						aria-controls={open ? 'menu-items' : undefined}
						aria-expanded={open ? 'true' : undefined}
						aria-haspopup="true"
						onClick={handleClick}
					>
						<MenuIcon />
					</IconButton>
					<Menu
						id="menu-items"
						MenuListProps={{
							'aria-labelledby': 'dropdown-button',
						}}
						anchorEl={anchorElement}
						open={open}
						onClose={handleClose}
						PaperProps={{
							style: {
								width: '100px',
							},
						}}
					>
						<MenuItem onClick={handleClose}>
							<NextLink href="/" {...props}>
								Home
							</NextLink>
						</MenuItem>

						<MenuItem onClick={handleClose}>
							<NextLink href="/about" {...props}>
								About
							</NextLink>
						</MenuItem>

						<MenuItem onClick={handleClose}>
							<NextLink href="/help" {...props}>
								Help
							</NextLink>
						</MenuItem>
					</Menu>
				</div>
			) : (
				<div>
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
				</div>
			)}
		</header>
	);
};

export default Header;
