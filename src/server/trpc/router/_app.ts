import { router } from '../trpc';

import { searchRouter } from './search';
import { technologiesRouter } from './technologies';

export const appRouter = router({
	search: searchRouter,
	technologies: technologiesRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
