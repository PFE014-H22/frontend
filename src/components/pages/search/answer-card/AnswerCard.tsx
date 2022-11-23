import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Typography,
} from '@mui/material';
import { SearchResponse, Source } from '../../../../server/trpc/router/search';
import Card from '../../../common/card/Card';
import HorizontalDivider from '../../../layout/horizontal-divider/HorizontalDivider';
import AnswerMatch from '../answer-match/AnswerMatch';
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
	const componentFactory = (source: Source) => {
		switch (source.source_name) {
			case 'stackoverflow':
				return <StackOverflowDetails source={source} parameter={answer.parameter.name} />;
			default:
				return null;
		}
	};

	return (
		<Card>
			<Accordion
				className={styles.accordion__container}
				elevation={0}
				disableGutters
			>
				<AccordionSummary
					className={styles.accordion__summary}
					expandIcon={
						<ExpandMoreIcon className={styles.accordion__icon} />
					}
				>
					<div className={styles.summary__content}>
						<div className={styles.summary__content__row}>
							<Typography className={styles.parameter__name}>
								{answer.parameter.name}
							</Typography>

							<Typography component="div">
								<AnswerMatch
									matches={answer.parameter.matches}
									similarity_score={answer.similarity_score}
								/>
							</Typography>
						</div>

						<Typography className={styles.parameter__description}>
							{answer.parameter.description}
						</Typography>
					</div>
				</AccordionSummary>

				<AccordionDetails>
					{answer.sources.map((source, index) => (
						<Typography key={index} component="div">
							{componentFactory(source)}
							{index !== answer.sources.length - 1 && (
								<HorizontalDivider />
							)}
						</Typography>
					))}
				</AccordionDetails>
			</Accordion>
		</Card>
	);
};

export default AnswerCard;
