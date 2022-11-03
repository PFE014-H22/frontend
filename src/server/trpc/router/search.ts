import axios from 'axios';
import { z } from 'zod';
import { env } from '../../../env/server.mjs';
import { publicProcedure, router } from '../trpc';

/**
 * Schema defining the expected shape of the response
 * received from the server when doing a search.
 */
const searchSchema = z.object({
	/**
	 * List of all the answers for the user query.
	 */
	answers: z.array(
		z.object({
			answer_id: z.number(),
			body: z.string(),
			is_accepted: z.boolean(),
			link: z.string(),
			parameters: z.array(z.string()),
			question_id: z.string(),
			similarity_score: z.number(),
			source: z.string(),
			tags: z.array(z.string()),
		}),
	),
	/**
	 * The user searched term.
	 */
	query: z.string(),
	/**
	 * The selected technology by the user.
	 */
	technology: z.string(),
});

/**
 * Infered return type from the search schema.
 */
export type SearchResponse = z.infer<typeof searchSchema>;

/**
 * Trpc router to encapsulate the network requests for searching parameters.
 */
export const searchRouter = router({
	/**
	 * Retrieve the config parameters from the backend server (GET /search)
	 */
	stackoverflow: publicProcedure
		.input(z.object({ searchTerm: z.string(), technology: z.string() }))
		.query(async ({ input }) => {
			const { data } = await axios.get(`${env.PROXY_API}/search`, {
				params: {
					q: input.searchTerm,
				},
			});
			return searchSchema.parse(data);
		}),
	/**
	 * Mocks the implementation of the backend server. (GET /search)
	 */
	mockStackoverflow: publicProcedure
		.input(z.object({ searchTerm: z.string(), technology: z.string() }))
		.query(async ({ input }) => {
			return {
				answers: [
					{
						answer_id: 8705014,
						body: '<p>Take a look at the following:</p>\n\n<p><a href="https://github.com/winglian/SSTable2S3" rel="nofollow">https://github.com/winglian/SSTable2S3</a></p>\n',
						is_accepted: true,
						link: 'https://stackoverflow.com/questions/8703370/does-any-way-to-automate-snaphot-processing-for-cassandra-on-the-aws/8705014#8705014',
						parameters: [],
						question_id: '8703370',
						similarity_score: 0.21544325589298968,
						source: 'stackoverflow',
						tags: ['cassandra'],
					},
					{
						answer_id: 8705014,
						body: '<p>Take a look at the following:</p>\n\n<p><a href="https://github.com/winglian/SSTable2S3" rel="nofollow">https://github.com/winglian/SSTable2S3</a></p>\n',
						is_accepted: true,
						link: 'https://stackoverflow.com/questions/8703370/does-any-way-to-automate-snaphot-processing-for-cassandra-on-the-aws/8705014#8705014',
						parameters: [],
						question_id: '8703370',
						similarity_score: 0.21544325589298968,
						source: 'stackoverflow',
						tags: ['cassandra'],
					},
					{
						answer_id: 8705014,
						body: '<p>Take a look at the following:</p>\n\n<p><a href="https://github.com/winglian/SSTable2S3" rel="nofollow">https://github.com/winglian/SSTable2S3</a></p>\n',
						is_accepted: true,
						link: 'https://stackoverflow.com/questions/8703370/does-any-way-to-automate-snaphot-processing-for-cassandra-on-the-aws/8705014#8705014',
						parameters: [],
						question_id: '8703370',
						similarity_score: 0.21544325589298968,
						source: 'stackoverflow',
						tags: ['cassandra'],
					},
					{
						answer_id: 8705014,
						body: '<p>Take a look at the following:</p>\n\n<p><a href="https://github.com/winglian/SSTable2S3" rel="nofollow">https://github.com/winglian/SSTable2S3</a></p>\n',
						is_accepted: true,
						link: 'https://stackoverflow.com/questions/8703370/does-any-way-to-automate-snaphot-processing-for-cassandra-on-the-aws/8705014#8705014',
						parameters: [],
						question_id: '8703370',
						similarity_score: 0.21544325589298968,
						source: 'stackoverflow',
						tags: ['cassandra'],
					},
					{
						answer_id: 8705014,
						body: '<p>Take a look at the following:</p>\n\n<p><a href="https://github.com/winglian/SSTable2S3" rel="nofollow">https://github.com/winglian/SSTable2S3</a></p>\n',
						is_accepted: true,
						link: 'https://stackoverflow.com/questions/8703370/does-any-way-to-automate-snaphot-processing-for-cassandra-on-the-aws/8705014#8705014',
						parameters: [],
						question_id: '8703370',
						similarity_score: 0.21544325589298968,
						source: 'stackoverflow',
						tags: ['cassandra'],
					},
					{
						answer_id: 8705014,
						body: '<p>Take a look at the following:</p>\n\n<p><a href="https://github.com/winglian/SSTable2S3" rel="nofollow">https://github.com/winglian/SSTable2S3</a></p>\n',
						is_accepted: true,
						link: 'https://stackoverflow.com/questions/8703370/does-any-way-to-automate-snaphot-processing-for-cassandra-on-the-aws/8705014#8705014',
						parameters: [],
						question_id: '8703370',
						similarity_score: 0.21544325589298968,
						source: 'stackoverflow',
						tags: ['cassandra'],
					},
					{
						answer_id: 8705014,
						body: '<p>Take a look at the following:</p>\n\n<p><a href="https://github.com/winglian/SSTable2S3" rel="nofollow">https://github.com/winglian/SSTable2S3</a></p>\n',
						is_accepted: true,
						link: 'https://stackoverflow.com/questions/8703370/does-any-way-to-automate-snaphot-processing-for-cassandra-on-the-aws/8705014#8705014',
						parameters: [],
						question_id: '8703370',
						similarity_score: 0.21544325589298968,
						source: 'stackoverflow',
						tags: ['cassandra'],
					},
					{
						answer_id: 8705014,
						body: '<p>Take a look at the following:</p>\n\n<p><a href="https://github.com/winglian/SSTable2S3" rel="nofollow">https://github.com/winglian/SSTable2S3</a></p>\n',
						is_accepted: true,
						link: 'https://stackoverflow.com/questions/8703370/does-any-way-to-automate-snaphot-processing-for-cassandra-on-the-aws/8705014#8705014',
						parameters: [],
						question_id: '8703370',
						similarity_score: 0.21544325589298968,
						source: 'stackoverflow',
						tags: ['cassandra'],
					},
					{
						answer_id: 8705014,
						body: '<p>Take a look at the following:</p>\n\n<p><a href="https://github.com/winglian/SSTable2S3" rel="nofollow">https://github.com/winglian/SSTable2S3</a></p>\n',
						is_accepted: true,
						link: 'https://stackoverflow.com/questions/8703370/does-any-way-to-automate-snaphot-processing-for-cassandra-on-the-aws/8705014#8705014',
						parameters: [],
						question_id: '8703370',
						similarity_score: 0.21544325589298968,
						source: 'stackoverflow',
						tags: ['cassandra'],
					},
					{
						answer_id: 8705014,
						body: '<p>Take a look at the following:</p>\n\n<p><a href="https://github.com/winglian/SSTable2S3" rel="nofollow">https://github.com/winglian/SSTable2S3</a></p>\n',
						is_accepted: true,
						link: 'https://stackoverflow.com/questions/8703370/does-any-way-to-automate-snaphot-processing-for-cassandra-on-the-aws/8705014#8705014',
						parameters: [],
						question_id: '8703370',
						similarity_score: 0.21544325589298968,
						source: 'stackoverflow',
						tags: ['cassandra'],
					},
				],
				query: input.searchTerm,
				technology: input.technology,
			};
		}),
});
