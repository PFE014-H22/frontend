import { router, publicProcedure } from '../trpc';
import { z } from 'zod';
import axios from 'axios';
import { env } from '../../../env/server.mjs';

/**
 * Schema defining the expected shape of the response
 * received from the server when asking for the
 * current supported techologies.
 */
export const dropdownChoicesSchema = z.array(
	z.object({
		/**
		 * The unique key used to identify the technology.
		 */
		key: z.string(),

		/**
		 * The display value of the technology.
		 */
		value: z.string(),
	}),
);

/**
 * Infered return type from the dropdownChoices schema.
 */
export type DropdownChoicesResponse = z.infer<typeof dropdownChoicesSchema>;

/**
 * Trpc router to encapsulate the network requests to the current supported techologies.
 */
export const technologiesRouter = router({
	/**
	 * Retrieve the current technologies supported by the backend server. (GET /technologies)
	 */
	dropdown: publicProcedure.query(async () => {
		const { data } = await axios.get(`${env.PROXY_API}/technologies`);
		return dropdownChoicesSchema.parse(data);
	}),

	/**
	 * Mocks the implementation of the backend server. (GET /technologies)
	 */
	mockDropdown: publicProcedure.query(() => {
		const data = [
			{ key: 'CASSANDRA', value: 'Cassandra' },
			{ key: 'MongoDB', value: 'MongoDB' },
		];
		return dropdownChoicesSchema.parse(data);
	}),
});
