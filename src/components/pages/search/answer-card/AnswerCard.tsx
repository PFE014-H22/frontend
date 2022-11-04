import Link from 'next/link';
import { useMemo } from 'react';
import { SearchResponse } from '../../../../server/trpc/router/search';
import Card from '../../../common/card/Card';
import PercentageMatchBar from '../../../common/percentage-match-bar/PercentageMatchBar';
import styles from './AnswerCard.module.scss';

/**
 * The props used to configure the AnswerCard component.
 */
export interface AnswerCardProps {
	/**
	 * Single answer object from the search backend response.
	 */
	answer: SearchResponse['answers'][0];

	/**
	 * The search term that was queried to get the answer.
	 */
	searchTerm: string;

	/**
	 * The technology that was selected to get the answer.
	 */
	technology: string;
}

/**
 * Component used to display the content from one answer from the backend.
 */
const AnswerCard = ({ answer, searchTerm, technology }: AnswerCardProps) => {
	const detailsHref = useMemo(() => {
		let url = `/search/details/${answer.parameter.name}`;
		url += `?q=${encodeURIComponent(searchTerm)}`;
		url += `&t=${encodeURIComponent(technology)}`;
		return url;
	}, [answer.parameter.name, searchTerm, technology]);

	return (
		<Card>
			<Link href={detailsHref} passHref>
				<a className={styles.link__parameter}>
					{answer.parameter.name}
				</a>
			</Link>

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
		</Card>
	);
};

export default AnswerCard;
