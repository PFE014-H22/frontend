import axios from 'axios';
import { z } from 'zod';
import { env } from '../../../env/server.mjs';
import { publicProcedure, router } from '../trpc';

/**
 * Schema defining the expected shape of the response
 * received from the server when retrieving
 * details about a parameter.
 *
 * TODO: Add comments to the fields once we are sure that it will not change anymore.
 */
export const detailsSchema = z.object({
	parameter: z.object({
		description: z.string(),
		matches: z.number(),
		name: z.string(),
	}),
	similarity_score: z.number(),
	sources: z.array(
		z.object({
			answer_id: z.number(),
			is_accepted: z.boolean(),
			link: z.string(),
			name: z.enum(['stackoverflow']),
			question_body: z.string(),
			question_id: z.string(),
			question_title: z.string(),
			response_body: z.string(),
			similarity_score: z.number(),
			tags: z.array(z.string()),
		}),
	),
});

/**
 * Infered return type from the details schema.
 */
export type DetailsResponse = z.infer<typeof detailsSchema>;

/**
 * Extracted utility for a config parameter from the `DetailsResponse` type.
 */
export type ConfigParameter = DetailsResponse['parameter'];

/**
 * Extracted utility for a similarity_score from the `DetailsResponse` type.
 */
export type SimilarityScore = DetailsResponse['similarity_score'];

/**
 * Extracted utility for a single source from the `DetailsResponse` type.
 */
export type Source = DetailsResponse['sources'][0];

/**
 * Trpc router to encapsulate the network requests for getting details
 * about a parameter.
 */
export const detailsRouter = router({
	/**
	 * Retrieve the details for a parameter from the backend server (GET /details/<parameter>)
	 */
	details: publicProcedure
		.input(
			z.object({
				parameter: z.string(),
				searchTerm: z.string(),
				technology: z.string(),
			}),
		)
		.query(async ({ input }) => {
			const { data } = await axios.get(`${env.PROXY_API}/details/${encodeURIComponent(input.parameter)}`, {
				params: {
					q: encodeURIComponent(input.searchTerm),
					t: encodeURIComponent(input.technology),
				},
			});
			return detailsSchema.parse(data);
		}),
	/**
	 * Mocks the implementation of the backend server. (GET /details/<parameter>)
	 */
	mockDetails: publicProcedure
		.input(
			z.object({
				parameter: z.string(),
				searchTerm: z.string(),
				technology: z.string(),
			}),
		)
		.query(async ({ input }) => {
			const data = {
				similarity_score: 0.21544325589298968,
				parameter: {
					name: input.parameter,
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
			};

			return detailsSchema.parse(data);
		}),
});
