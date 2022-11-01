import { router, publicProcedure } from '../trpc';
import { z } from 'zod';
import axios from 'axios';
import { env } from '../../../env/server.mjs';

const searchSchema = z.object({
	answers: z.array(
		z.object({
			answer_id: z.number(),
			is_accepted: z.boolean(),
			link: z.string(),
			question_id: z.string(),
			similarity_score: z.number(),
		}),
	),
	query: z.string(),
});

export type SearchResponse = z.infer<typeof searchSchema>;

export const searchRouter = router({
	stackoverflow: publicProcedure
		.input(z.object({ searchTerm: z.string() }))
		.query(async ({ input }) => {
			const { data } = await axios.get(`${env.PROXY_API}/search`, {
				params: {
					q: input.searchTerm,
				},
			});
			return searchSchema.parse(data);
		}),
	mockStackoverflow: publicProcedure
		.input(z.object({ searchTerm: z.string() }))
		.query(async ({ input }) => {
			return {
				answers: [
					{
						answer_id: 61863540,
						is_accepted: true,
						link: 'https://stackoverflow.com/questions/61858722/cassandra-connections-spikes-load-issue/61863540#61863540',
						question_id: '61858722',
						similarity_score: 0.4119689030904544,
					},
					{
						answer_id: 43287907,
						is_accepted: false,
						link: 'https://stackoverflow.com/questions/20421763/cassandra-datastax-driver-connection-pool/43287907#43287907',
						question_id: '20421763',
						similarity_score: 0.39612185890416873,
					},
					{
						answer_id: 57142790,
						is_accepted: true,
						link: 'https://stackoverflow.com/questions/57141458/how-to-create-a-cassandra-connection-pool-using-datastax-driver/57142790#57142790',
						question_id: '57141458',
						similarity_score: 0.32298169136463806,
					},
					{
						answer_id: 10127237,
						is_accepted: true,
						link: 'https://stackoverflow.com/questions/10127015/how-do-i-close-a-connection-to-a-cassandra-cluster-in-the-hector-api/10127237#10127237',
						question_id: '10127015',
						similarity_score: 0.3144333163754234,
					},
					{
						answer_id: 17949211,
						is_accepted: true,
						link: 'https://stackoverflow.com/questions/17941920/test-hector-spring-cassandra-connection/17949211#17949211',
						question_id: '17941920',
						similarity_score: 0.30184957866797185,
					},
					{
						answer_id: 50722874,
						is_accepted: true,
						link: 'https://stackoverflow.com/questions/50717935/max-connection-per-host-in-cassandra-driver/50722874#50722874',
						question_id: '50717935',
						similarity_score: 0.2971033031706731,
					},
					{
						answer_id: 57191085,
						is_accepted: true,
						link: 'https://stackoverflow.com/questions/57188915/difference-between-core-connections-and-i-o-threads-in-datastax-cassandra-c-dr/57191085#57191085',
						question_id: '57188915',
						similarity_score: 0.2836172329375126,
					},
					{
						answer_id: 50234174,
						is_accepted: true,
						link: 'https://stackoverflow.com/questions/50233992/number-of-connections-per-host-in-datastax-c-driver/50234174#50234174',
						question_id: '50233992',
						similarity_score: 0.27229306075339255,
					},
					{
						answer_id: 38981698,
						is_accepted: true,
						link: 'https://stackoverflow.com/questions/38981452/how-to-create-persistent-cassandra-connection-in-go-language/38981698#38981698',
						question_id: '38981452',
						similarity_score: 0.2663951923148149,
					},
					{
						answer_id: 31130186,
						is_accepted: true,
						link: 'https://stackoverflow.com/questions/31129488/does-it-have-any-issue-if-i-want-to-add-a-new-column-for-big-table-in-cassandra/31130186#31130186',
						question_id: '31129488',
						similarity_score: 0.24033255603967932,
					},
				],
				query: input.searchTerm,
			};
		}),
});
