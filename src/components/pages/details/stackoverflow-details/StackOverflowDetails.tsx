import { Source } from '../../../../server/trpc/router/details';
import PercentageMatchBar from '../../../common/percentage-match-bar/PercentageMatchBar';
import HorizontalDivider from '../../../layout/horizontal-divider/HorizontalDivider';
import Tag from '../tag/Tag';
import styles from './StackOverflowDetails.module.scss';

/**
 * Props used to configure the `StackOverflowDetails` component.
 */
export interface StackOverflowDetailsProps {
	/**
	 * A single source of information where the extracted parameter
	 * was found.
	 */
	source: Source;
}

/**
 * Component to wrap the content of the details from a single source for
 * a config parameter.
 */
const StackOverflowDetails = ({ source }: StackOverflowDetailsProps) => {
	return (
		<>
			<div className={styles.container}>
				<p className={styles.source__name}>From StackOverflow</p>

				<h3 className={styles.question__title}>
					{source.question_title}
				</h3>

				<div className={styles.details__row__container}>
					<div className={styles.tags__container}>
						<span>Tags :</span>
						<div className={styles.tags__group__container}>
							{source.tags.map((tag, index) => (
								<Tag key={index}>{tag}</Tag>
							))}
						</div>
					</div>

					<div className={styles.parameter__match__container}>
						<span className={styles.similarity__score}>
							{(source.similarity_score * 100).toFixed(2)}%
						</span>

						<PercentageMatchBar
							percentage={source.similarity_score}
						/>
					</div>
				</div>

				<div
					className={styles.question__body}
					dangerouslySetInnerHTML={{ __html: source.question_body }}
				/>

				<HorizontalDivider />

				<h4 className={styles.answer__subtitle}>Accepted answer</h4>

				<div
					className={styles.response__body}
					dangerouslySetInnerHTML={{ __html: source.response_body }}
				/>
			</div>
		</>
	);
};

export default StackOverflowDetails;
