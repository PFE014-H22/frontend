import LinkImage, {
	LinkImageProps,
} from '../../../common/link-image/LinkImage';

/**
 * The props used to configure the `MemberPortrait` component.
 */
export interface MemberPortraitProps {
	/**
	 * Link to member github profile or linkedin
	 */
	href: LinkImageProps['href'];

	/**
	 * Full name of the team member.
	 */
	memberName: string;

	/**
	 * Source of the image to display.
	 */
	src: LinkImageProps['src'];
}

/**
 * Component used to display a single member in the `/about` page.
 */
const MemberPortrait = ({ memberName, ...props }: MemberPortraitProps) => {
	return (
		<LinkImage
			width={128}
			height={128}
			alt={`Picture of ${memberName}`}
			{...props}
		>
			{memberName}
		</LinkImage>
	);
};

export default MemberPortrait;
