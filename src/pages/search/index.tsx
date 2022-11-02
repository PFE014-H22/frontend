import { NextPage } from 'next';
import AnswerCard from '../../components/pages/search/AnswerCard';
import { trpc } from '../../utils/trpc';

/**
 * Props used to configure the search page component.
 */
export interface SearchPageProps {
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
 * Search page component.
 * Maps to the `/search` endpoint.
 */
const SearchPage: NextPage<SearchPageProps> = ({ q, t }) => {
	const { data } = trpc.search.stackoverflow.useQuery({
		searchTerm: q as string,
		technology: t as string,
	});

	return (
		<>
			<div className="container mx-auto flex flex-1 flex-col">
				<main>
					<section>
						<h1 className="text-4xl font-bold">Search Results</h1>

						<div className="my-4 flex flex-col items-center justify-center gap-8">
							{data?.answers.map(answer => (
								<AnswerCard
									key={answer.answer_id}
									answer={answer}
									searchTerm={q as string}
									technology={t as string}
								/>
							))}
						</div>
					</section>
				</main>
			</div>
		</>
	);
};

SearchPage.getInitialProps = async ({ query }): Promise<SearchPageProps> => {
	let { q, t } = query;

	if (q !== undefined && typeof q !== 'string') {
		q = undefined;
	}

	if (t !== undefined && typeof t !== 'string') {
		t = undefined;
	}

	return { q, t };
};

export default SearchPage;
