import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import { SearchResponse } from '../server/trpc/router/search';
import { trpc } from '../utils/trpc';

interface SearchProps {
	q?: string | string[];
}

const Search: NextPage = ({ q }: SearchProps) => {
	const router = useRouter();
	const searchMutation = trpc.search.mockStackoverflow.useMutation();
	const [answers, setAnswers] = useState<SearchResponse['answers']>([]);

	const fetchAnswers = useCallback(async (searchTerm: string) => {
		const { answers } = await searchMutation.mutateAsync({
			searchTerm,
		});
		setAnswers(answers);
	}, []);

	useEffect(() => {
		if (typeof q !== 'string') {
			router.replace('/');
			return;
		}
		fetchAnswers(q);
	}, []);

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
						{answers.map(answer => (
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

Search.getInitialProps = async ({ query }): Promise<SearchProps> => {
	const { q } = query;
	return { q };
};

export default Search;
