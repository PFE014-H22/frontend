import Link, { LinkProps } from '../link/Link';
import styles from './HorizontalLinks.module.scss';

/**
 * The props used to configure the horizontal links component.
 */
 export interface HorizontalLinksProps extends Omit<LinkProps, 'children' | 'href'> {}

/**
 * Component used to display the links to the Home, About, and
 * Help pages horizontally when the screen is wide enough.
 */
const HorizontalLinks = (props: HorizontalLinksProps) => {
	return (
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
    );
};

export default HorizontalLinks;
