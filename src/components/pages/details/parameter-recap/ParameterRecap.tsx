import {
	ConfigParameter,
	SimilarityScore,
} from '../../../../server/trpc/router/details';
import PercentageMatchBar from '../../../common/percentage-match-bar/PercentageMatchBar';
import styles from './ParameterRecap.module.scss';

/**
 * The props used to configure the `ParameterRecap` component.
 */
export interface ParameterRecapProps {
	/**
	 * The config parameter fetched from the server.
	 */
	parameter: ConfigParameter;

	/**
	 * Number representing the percentage match from the NLP algorithm for all sources combined.
	 */
	similarity_score: SimilarityScore;
}

/**
 * Component displaying more details about the parameter on the `/details` page.
 */
const ParameterRecap = ({
	similarity_score,
	parameter: { name, description, matches },
}: ParameterRecapProps) => {
	return (
		<>
			<h2 className={styles.parameter__name}>{name}</h2>

			<div className={styles.content__container}>
				<div className={styles.description__container}>
					<p className={styles.description}>{description}</p>
				</div>

				<div className={styles.parameter__results__container}>
					<span className={styles.match__container}>
						{matches} match(s)
					</span>

					<div className={styles.match__bar__container}>
						<span className={styles.similarity__score}>
							{(similarity_score * 100).toFixed(2)}%
						</span>

						<PercentageMatchBar percentage={similarity_score} />
					</div>
				</div>
			</div>
		</>
	);
};

export default ParameterRecap;
