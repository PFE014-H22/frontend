import styles from './MemberPortrait.module.scss'
import LinkImage, {
	LinkImageProps,
} from '../../../common/link-image/LinkImage';
import NextLink from 'next/link';
import Image from 'next/image';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

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
	 * Role of the member within the team.
	 */
	title: string;

	/**
	 * Source of the image to display.
	 */
	src: LinkImageProps['src'];
}

/**
 * Component used to display a single member in the `/about` page.
 */
const MemberPortrait = ({ memberName, title, ...props }: MemberPortraitProps) => {
	return (
		<NextLink href={props.href} passHref>
			<a>
				<div className={styles.portrait}>
					<div className={styles.portrait_background}>
						<Image
							src={props.src}
							height={128}
							width={128}
							quality={100}
							alt={`Picture of ${memberName}`}
						/>
					</div>
					<LinkedInIcon className={styles.linkedin_icon}/>
				</div>
				<div className={styles.member}>
					{memberName}
				</div>
				<div className={styles.title}>
					{title}
				</div>
			</a>
		</NextLink>
	);
};

export default MemberPortrait;
