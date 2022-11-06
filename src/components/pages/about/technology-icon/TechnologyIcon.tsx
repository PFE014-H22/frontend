import LinkImage, {
	LinkImageProps,
} from '../../../common/link-image/LinkImage';

/**
 * The props used to configure the `TechnologyIcon` component.
 */
export interface TechnologyIconProps {
	/**
	 * Technology link to docs or resource.
	 */
	href: LinkImageProps['href'];

	/**
	 * Name of the technology used.
	 */
	name: string;

	/**
	 * Source of the image to display.
	 */
	src: LinkImageProps['src'];
}

/**
 * Component used to display a single technology in the `/about` page.
 */
const TechnologyIcon = ({ name, ...props }: TechnologyIconProps) => {
	return (
		<LinkImage height={128} width={128} alt={`${name} logo`} {...props}>
			{name}
		</LinkImage>
	);
};

export default TechnologyIcon;
