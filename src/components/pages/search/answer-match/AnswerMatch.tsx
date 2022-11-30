import PercentageMatchBar from '../../../common/percentage-match-bar/PercentageMatchBar';
import styles from './AnswerMatch.module.scss';

/**
 * The props used to configure the AnswerMatch component.
 */
export interface AnswerMatchProps {
	/**
	 * Number of answers that match the parameter.
	 */
	matches: number;

	/**
	 * Similarity score between the answer and the user question.
	 */
	similarity_score: number;
}

/**
 * Component used to display the match bar in the SearchPage.
 */
const AnswerMatch = ({ matches, similarity_score }: AnswerMatchProps) => {
	return (
		<div className={styles.container}>
			<span className={styles.similarity__score}>
				{(similarity_score * 100).toFixed(2)}% ({matches} matches)
			</span>

			<PercentageMatchBar percentage={similarity_score} />
		</div>
	);
};

export default AnswerMatch;
