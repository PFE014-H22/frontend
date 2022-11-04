import { router } from '../trpc';

import { detailsRouter } from './details';
import { searchRouter } from './search';
import { technologiesRouter } from './technologies';

export const appRouter = router({
	details: detailsRouter,
	search: searchRouter,
	technologies: technologiesRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
