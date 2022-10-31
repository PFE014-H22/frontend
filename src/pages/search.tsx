import { NextPage } from 'next';
import { trpc } from '../utils/trpc';

/**
 * Props used to configure the search page component.
 */
interface SearchPageProps {
	/**
	 * Query parameter representing the user's query.
	 */
	q?: string | string[];
}

/**
 * Search page component.
 * Maps to the `/search` endpoint.
 */
const SearchPage: NextPage<SearchPageProps> = ({ q }) => {
	const { data } = trpc.search.mockStackoverflow.useQuery({
		searchTerm: q as string,
	});

	return (
		<>
			<main>
				<table className="table-auto border-separate border-spacing-2 border border-slate-400">
					<thead>
						<tr>
							<th>question_id</th>
							<th>answer_id</th>
							<th>is_accepted</th>
							<th>similarity_score</th>
							<th>link</th>
						</tr>
					</thead>

					<tbody>
						{data?.answers.map(answer => (
							<tr key={answer.answer_id}>
								<th>{answer.question_id}</th>
								<th>{answer.answer_id}</th>
								<th>{`${answer.is_accepted}`}</th>
								<th>{answer.similarity_score}</th>
								<th>{answer.link}</th>
							</tr>
						))}
					</tbody>
				</table>
			</main>
		</>
	);
};

SearchPage.getInitialProps = async ({ query }): Promise<SearchPageProps> => {
	const { q } = query;
	return { q };
};

export default SearchPage;
