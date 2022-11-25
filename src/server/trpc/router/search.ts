import axios from 'axios';
import { z } from 'zod';
import { env } from '../../../env/server.mjs';
import { setBoldParameters } from '../../../lib/setBoldParameters';
import { publicProcedure, router } from '../trpc';

/**
 * Schema defining the expected shape of the response
 * received from the server when doing a search.
 */
export const searchSchema = z.object({
	/**
	 * List of all the answers for the user query.
	 */
	answers: z.array(
		z.object({
			parameter: z.object({
				description: z.string(),
				matches: z.number(),
				name: z.string(),
			}),
			similarity_score: z.number(),
			sources: z.array(
				z.object({
					answer_id: z.string(),
					link: z.string(),
					question_body: z.string(),
					question_id: z.string(),
					question_title: z.string(),
					response_body: z.string(),
					similarity_score: z.number(),
					source_name: z.enum(['stackoverflow']),
					tags: z.array(z.string()),
				}),
			),
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
 * Extracted utility for a single source from the `SearchResponse` type.
 */
export type Source = SearchResponse['answers'][0]['sources'][0];

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
					q: encodeURIComponent(input.searchTerm),
					t: encodeURIComponent(input.technology),
				},
			});

			const parsedData = searchSchema.parse(data);

			return parsedData.answers.map((answer) => {
				answer.sources.map((source) => {
					setBoldParameters(answer.parameter.name, source.response_body);
				});
			});
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
						similarity_score: 0.21544325589298968,
						parameter: {
							name: 'Parameter 1',
							description:
								'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus ratione soluta eaque veniam, pariatur ducimus fugiat necessitatibus doloribus accusantium tenetur.',
							matches: 3,
						},
						sources: [
							{
								answer_id: 8705014,
								question_body:
									'<p>I tried to to this but it did not work, what am i doing wrong?</p>',
								response_body:
									'<p>Take a look at the following:</p>\n\n<p><a href="https://github.com/winglian/SSTable2S3" rel="nofollow">https://github.com/winglian/SSTable2S3</a></p>\n',
								link: 'https://stackoverflow.com/questions/8703370/does-any-way-to-automate-snaphot-processing-for-cassandra-on-the-aws/8705014#8705014',
								source_name: 'stackoverflow' as const,
								question_id: '8703370',
								question_title: 'How do i do this?',
								similarity_score: 0.21544325589298968,
								tags: ['Tag 1', 'Tag 2', 'Tag 3'],
							},
						],
					},
					{
						similarity_score: 0.21544325589298968,
						parameter: {
							name: 'Parameter 2',
							description:
								'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus ratione soluta eaque veniam, pariatur ducimus fugiat necessitatibus doloribus accusantium tenetur.',
							matches: 3,
						},
						sources: [
							{
								answer_id: 8705014,
								question_body:
									'<p>I tried to to this but it did not work, what am i doing wrong?</p>',
								response_body:
									'<p>Take a look at the following:</p>\n\n<p><a href="https://github.com/winglian/SSTable2S3" rel="nofollow">https://github.com/winglian/SSTable2S3</a></p>\n',
								link: 'https://stackoverflow.com/questions/8703370/does-any-way-to-automate-snaphot-processing-for-cassandra-on-the-aws/8705014#8705014',
								source_name: 'stackoverflow' as const,
								question_id: '8703370',
								question_title: 'How do i do this?',
								similarity_score: 0.21544325589298968,
								tags: ['Tag 1', 'Tag 2', 'Tag 3'],
							},
						],
					},
					{
						similarity_score: 0.21544325589298968,
						parameter: {
							name: 'Parameter 3',
							description:
								'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus ratione soluta eaque veniam, pariatur ducimus fugiat necessitatibus doloribus accusantium tenetur.',
							matches: 3,
						},
						sources: [
							{
								answer_id: 8705014,
								question_body:
									'<p>I tried to to this but it did not work, what am i doing wrong?</p>',
								response_body:
									'<p>Take a look at the following:</p>\n\n<p><a href="https://github.com/winglian/SSTable2S3" rel="nofollow">https://github.com/winglian/SSTable2S3</a></p>\n',
								link: 'https://stackoverflow.com/questions/8703370/does-any-way-to-automate-snaphot-processing-for-cassandra-on-the-aws/8705014#8705014',
								source_name: 'stackoverflow' as const,
								question_id: '8703370',
								question_title: 'How do i do this?',
								similarity_score: 0.21544325589298968,
								tags: ['Tag 1', 'Tag 2', 'Tag 3'],
							},
						],
					},
					{
						similarity_score: 0.21544325589298968,
						parameter: {
							name: 'Parameter 4',
							description:
								'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus ratione soluta eaque veniam, pariatur ducimus fugiat necessitatibus doloribus accusantium tenetur.',
							matches: 3,
						},
						sources: [
							{
								answer_id: 8705014,
								question_body:
									'<p>I tried to to this but it did not work, what am i doing wrong?</p>',
								response_body:
									'<p>Take a look at the following:</p>\n\n<p><a href="https://github.com/winglian/SSTable2S3" rel="nofollow">https://github.com/winglian/SSTable2S3</a></p>\n',
								link: 'https://stackoverflow.com/questions/8703370/does-any-way-to-automate-snaphot-processing-for-cassandra-on-the-aws/8705014#8705014',
								source_name: 'stackoverflow' as const,
								question_id: '8703370',
								question_title: 'How do i do this?',
								similarity_score: 0.21544325589298968,
								tags: ['Tag 1', 'Tag 2', 'Tag 3'],
							},
						],
					},
					{
						similarity_score: 0.21544325589298968,
						parameter: {
							name: 'Parameter 4',
							description:
								'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus ratione soluta eaque veniam, pariatur ducimus fugiat necessitatibus doloribus accusantium tenetur.',
							matches: 3,
						},
						sources: [
							{
								answer_id: 8705014,
								question_body:
									'<p>I tried to to this but it did not work, what am i doing wrong?</p>',
								response_body:
									'<p>Take a look at the following:</p>\n\n<p><a href="https://github.com/winglian/SSTable2S3" rel="nofollow">https://github.com/winglian/SSTable2S3</a></p>\n',
								link: 'https://stackoverflow.com/questions/8703370/does-any-way-to-automate-snaphot-processing-for-cassandra-on-the-aws/8705014#8705014',
								source_name: 'stackoverflow' as const,
								question_id: '8703370',
								question_title: 'How do i do this?',
								similarity_score: 0.21544325589298968,
								tags: ['Tag 1', 'Tag 2', 'Tag 3'],
							},
						],
					},
					{
						similarity_score: 0.21544325589298968,
						parameter: {
							name: 'Parameter 5',
							description:
								'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus ratione soluta eaque veniam, pariatur ducimus fugiat necessitatibus doloribus accusantium tenetur.',
							matches: 3,
						},
						sources: [
							{
								answer_id: 8705014,
								question_body:
									'<p>I tried to to this but it did not work, what am i doing wrong?</p>',
								response_body:
									'<p>Take a look at the following:</p>\n\n<p><a href="https://github.com/winglian/SSTable2S3" rel="nofollow">https://github.com/winglian/SSTable2S3</a></p>\n',
								link: 'https://stackoverflow.com/questions/8703370/does-any-way-to-automate-snaphot-processing-for-cassandra-on-the-aws/8705014#8705014',
								source_name: 'stackoverflow' as const,
								question_id: '8703370',
								question_title: 'How do i do this?',
								similarity_score: 0.21544325589298968,
								tags: ['Tag 1', 'Tag 2', 'Tag 3'],
							},
						],
					},
					{
						similarity_score: 0.21544325589298968,
						parameter: {
							name: 'Parameter 6',
							description:
								'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus ratione soluta eaque veniam, pariatur ducimus fugiat necessitatibus doloribus accusantium tenetur.',
							matches: 3,
						},
						sources: [
							{
								answer_id: 8705014,
								question_body:
									'<p>I tried to to this but it did not work, what am i doing wrong?</p>',
								response_body:
									'<p>Take a look at the following:</p>\n\n<p><a href="https://github.com/winglian/SSTable2S3" rel="nofollow">https://github.com/winglian/SSTable2S3</a></p>\n',
								link: 'https://stackoverflow.com/questions/8703370/does-any-way-to-automate-snaphot-processing-for-cassandra-on-the-aws/8705014#8705014',
								source_name: 'stackoverflow' as const,
								question_id: '8703370',
								question_title: 'How do i do this?',
								similarity_score: 0.21544325589298968,
								tags: ['Tag 1', 'Tag 2', 'Tag 3'],
							},
						],
					},
					{
						similarity_score: 0.21544325589298968,
						parameter: {
							name: 'Parameter 7',
							description:
								'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus ratione soluta eaque veniam, pariatur ducimus fugiat necessitatibus doloribus accusantium tenetur.',
							matches: 3,
						},
						sources: [
							{
								answer_id: 8705014,
								question_body:
									'<p>I tried to to this but it did not work, what am i doing wrong?</p>',
								response_body:
									'<p>Take a look at the following:</p>\n\n<p><a href="https://github.com/winglian/SSTable2S3" rel="nofollow">https://github.com/winglian/SSTable2S3</a></p>\n',
								link: 'https://stackoverflow.com/questions/8703370/does-any-way-to-automate-snaphot-processing-for-cassandra-on-the-aws/8705014#8705014',
								source_name: 'stackoverflow' as const,
								question_id: '8703370',
								question_title: 'How do i do this?',
								similarity_score: 0.21544325589298968,
								tags: ['Tag 1', 'Tag 2', 'Tag 3'],
							},
						],
					},
					{
						similarity_score: 0.21544325589298968,
						parameter: {
							name: 'Parameter 8',
							description:
								'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus ratione soluta eaque veniam, pariatur ducimus fugiat necessitatibus doloribus accusantium tenetur.',
							matches: 3,
						},
						sources: [
							{
								answer_id: 8705014,
								question_body:
									'<p>I tried to to this but it did not work, what am i doing wrong?</p>',
								response_body:
									'<p>Take a look at the following:</p>\n\n<p><a href="https://github.com/winglian/SSTable2S3" rel="nofollow">https://github.com/winglian/SSTable2S3</a></p>\n',
								link: 'https://stackoverflow.com/questions/8703370/does-any-way-to-automate-snaphot-processing-for-cassandra-on-the-aws/8705014#8705014',
								source_name: 'stackoverflow' as const,
								question_id: '8703370',
								question_title: 'How do i do this?',
								similarity_score: 0.21544325589298968,
								tags: ['Tag 1', 'Tag 2', 'Tag 3'],
							},
						],
					},
					{
						similarity_score: 0.21544325589298968,
						parameter: {
							name: 'Parameter 9',
							description:
								'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus ratione soluta eaque veniam, pariatur ducimus fugiat necessitatibus doloribus accusantium tenetur.',
							matches: 3,
						},
						sources: [
							{
								answer_id: 8705014,
								question_body:
									'<p>I tried to to this but it did not work, what am i doing wrong?</p>',
								response_body:
									'<p>Take a look at the following:</p>\n\n<p><a href="https://github.com/winglian/SSTable2S3" rel="nofollow">https://github.com/winglian/SSTable2S3</a></p>\n',
								is_accepted: true,
								link: 'https://stackoverflow.com/questions/8703370/does-any-way-to-automate-snaphot-processing-for-cassandra-on-the-aws/8705014#8705014',
								name: 'stackoverflow' as const,
								question_id: '8703370',
								question_title: 'How do i do this?',
								similarity_score: 0.21544325589298968,
								tags: ['Tag 1', 'Tag 2', 'Tag 3'],
							},
						],
					},
					{
						similarity_score: 0.21544325589298968,
						parameter: {
							name: 'Parameter 10',
							description:
								'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus ratione soluta eaque veniam, pariatur ducimus fugiat necessitatibus doloribus accusantium tenetur.',
							matches: 3,
						},
						sources: [
							{
								answer_id: 8705014,
								question_body:
									'<p>I tried to to this but it did not work, what am i doing wrong?</p>',
								response_body:
									'<p>Take a look at the following:</p>\n\n<p><a href="https://github.com/winglian/SSTable2S3" rel="nofollow">https://github.com/winglian/SSTable2S3</a></p>\n',
								link: 'https://stackoverflow.com/questions/8703370/does-any-way-to-automate-snaphot-processing-for-cassandra-on-the-aws/8705014#8705014',
								source_name: 'stackoverflow' as const,
								question_id: '8703370',
								question_title: 'How do i do this?',
								similarity_score: 0.21544325589298968,
								tags: ['Tag 1', 'Tag 2', 'Tag 3'],
							},
						],
					},
				],
				query: input.searchTerm,
				technology: input.technology,
			};
		}),
});
