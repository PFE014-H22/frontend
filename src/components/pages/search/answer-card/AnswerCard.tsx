import { useCallback, useState } from 'react';
import { SearchResponse, Source } from '../../../../server/trpc/router/search';
import Card from '../../../common/card/Card';
import PercentageMatchBar from '../../../common/percentage-match-bar/PercentageMatchBar';
import StackOverflowDetails from '../stackoverflow-details/StackOverflowDetails';
import styles from './AnswerCard.module.scss';

/**
 * The props used to configure the AnswerCard component.
 */
export interface AnswerCardProps {
	/**
	 * Single answer object from the search backend response.
	 */
	answer: SearchResponse['answers'][0];
}

/**
 * Component used to display the content from one answer from the backend.
 */
const AnswerCard = ({ answer }: AnswerCardProps) => {
	const [showDetails, setShowDetails] = useState(false);

	const componentFactory = (source: Source) => {
		switch (source.name) {
			case 'stackoverflow':
				return <StackOverflowDetails source={source} />;
			default:
				return null;
		}
	};

	const handleCollapse = useCallback(() => {
		setShowDetails(showDetails => !showDetails);
	}, []);

	return (
		<Card onClick={handleCollapse}>
			<div className={styles.parameter__name}>
				{answer.parameter.name}
			</div>

			<div className={styles.content__container}>
				<div className={styles.description__container}>
					<p className={styles.description}>
						{answer.parameter.description}
					</p>
				</div>

				<div className={styles.parameter__results__container}>
					<span className={styles.match__container}>
						{answer.parameter.matches} matches
					</span>

					<div className={styles.match__bar__container}>
						<span className={styles.similarity__score}>
							{(answer.similarity_score * 100).toFixed(2)}%
						</span>

						<PercentageMatchBar
							percentage={answer.similarity_score}
						/>
					</div>
				</div>
			</div>

			<div
				className={[
					styles.collapse__container,
					showDetails ? styles.open : styles.close,
				].join(' ')}
			>
				{answer.sources.map((source, index) => (
					<div key={index} className={styles.source__container}>
						{componentFactory(source)}
					</div>
				))}
			</div>
		</Card>
	);
};

export default AnswerCard;
