import { NextPage } from 'next';
import Card from '../../../components/common/card/Card';
import ParameterRecap from '../../../components/pages/details/parameter-recap/ParameterRecap';
import StackOverflowDetails from '../../../components/pages/details/stackoverflow-details/StackOverflowDetails';
import { Source } from '../../../server/trpc/router/details';
import styles from '../../../styles/DetailsPage.module.scss';
import { trpc } from '../../../utils/trpc';

/**
 * Props used to configure the details page component.
 */
export interface DetailsPageProps {
	/**
	 * The current parameter that will be queried to get more details.
	 */
	parameter?: string;

	/**
	 * Query parameter representing the user's query.
	 */
	q?: string;

	/**
	 * Query parameter representing the requested technology.
	 */
	t?: string;
}

/**
 * Details page component.
 * Maps to the `/search/details/{parameter}` endpoint.
 */
const DetailsPage: NextPage<DetailsPageProps> = ({ parameter, q, t }) => {
	const { data } = trpc.details.mockDetails.useQuery({
		parameter: parameter as string,
		searchTerm: q as string,
		technology: t as string,
	});

	const componentFactory = (source: Source) => {
		switch (source.name) {
			case 'stackoverflow':
				return <StackOverflowDetails source={source} />;
			default:
				return null;
		}
	};

	return (
		<>
			<div className={styles.container}>
				<h1 className={styles.header__one}>Details</h1>

				<section>
					{data && (
						<ParameterRecap
							similarity_score={data.similarity_score}
							parameter={data.parameter}
						/>
					)}
				</section>

				<main>
					<section>
						<div className={styles.details__container}>
							{data?.sources.map(source => (
								<div className={styles.source__container}>
									<Card>{componentFactory(source)}</Card>
								</div>
							))}
						</div>
					</section>
				</main>
			</div>
		</>
	);
};

DetailsPage.getInitialProps = async ({ query }): Promise<DetailsPageProps> => {
	let { parameter, q, t } = query;

	if (parameter !== undefined && typeof parameter !== 'string') {
		parameter = undefined;
	}

	if (q !== undefined && typeof q !== 'string') {
		q = undefined;
	}

	if (t !== undefined && typeof t !== 'string') {
		t = undefined;
	}

	return { parameter, q, t };
};

export default DetailsPage;
