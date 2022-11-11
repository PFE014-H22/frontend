import { LinkProps } from '../link/Link';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { useState, useCallback, MouseEvent } from 'react';
import NextLink from 'next/link';

/**
 * The props used to configure the dropdown links component.
 */
 export interface DropdownLinksProps extends Omit<LinkProps, 'children' | 'href'> {}

/**
 * Component used to display a dropdown button containing the 
 * links to the Home, About, and Help pages when the screen is too
 * small for to display the horizontal links.
 */
const DropdownLinks = (props: DropdownLinksProps) => {
    const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorElement);

	// Sets the anchor to the parent element on click
	const handleClick = useCallback((event: MouseEvent<HTMLElement>) => {
		setAnchorElement(event.currentTarget.parentElement);
	}, []);

	// Closes the dropdown
	const handleClose = useCallback(() => {
		setAnchorElement(null);
	}, []);

	return (
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
                <NextLink href="/" {...props}>
                    <MenuItem onClick={handleClose}>
                        Home
                    </MenuItem>
                </NextLink>
                
                <NextLink href="/about" {...props}>
                    <MenuItem onClick={handleClose}>
                        About
                    </MenuItem>
                </NextLink>

                <NextLink href="/help" {...props}>
                    <MenuItem onClick={handleClose}>
                        Help
                    </MenuItem>
                </NextLink>
            </Menu>
        </div>
    );
};

export default DropdownLinks;
