import { ReactNode } from 'react';
import styles from './Tag.module.scss';

/**
 * The props used to configure the `Tag` component.
 */
export interface TagProps {
	/**
	 * The content to show inside the tag.
	 */
	children: ReactNode;
}

/**
 * Component used to display a single tag in the ui.
 */
const Tag = ({ children }: TagProps) => {
	return <p className={styles.container}>{children}</p>;
};

export default Tag;
