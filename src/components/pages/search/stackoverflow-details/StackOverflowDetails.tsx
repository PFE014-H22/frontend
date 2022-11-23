import { setBoldParameters } from '../../../../lib/setBoldParameters';
import { Source } from '../../../../server/trpc/router/search';
import PercentageMatchBar from '../../../common/percentage-match-bar/PercentageMatchBar';
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

	/**
	 * The parameter found within the response's body that should be 
	 * configured. 
	 */
	parameter: string;
}

/**
 * Component to wrap the content of the details from a single source for
 * a config parameter.
 */
const StackOverflowDetails = ({ source, parameter }: StackOverflowDetailsProps) => {
	setBoldParameters(parameter, source.response_body);

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
