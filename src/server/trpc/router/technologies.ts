import { router, publicProcedure } from '../trpc';
import { z } from 'zod';
import axios from 'axios';
import { env } from '../../../env/server.mjs';

const dropdownChoicesSchema = z.object({
	options: z.array(
		z.object({
			key: z.string(),
			value: z.string(),
		}),
	),
});

export const technologiesRouter = router({
	dropdown: publicProcedure.query(async () => {
		const { data } = await axios.get(`${env.PROXY_API}/technologies`);
		return dropdownChoicesSchema.parse(data);
	}),
	mockDropdown: publicProcedure.query(() => {
		return {
			options: [
				{ key: 'CASSANDRA', value: 'Cassandra' },
				{ key: 'MONGO_DB', value: 'MongoDB' },
			],
		};
	}),
});
