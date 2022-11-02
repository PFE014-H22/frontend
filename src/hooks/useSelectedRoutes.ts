import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { UrlObject } from 'url';

/**
 * Utility hook to match the current pathname to a list of routes.
 */
export const useSelectedRoutes = (hrefs: (string | UrlObject)[]) => {
	const { pathname } = useRouter();

	const isSelected = useMemo(() => {
		return hrefs.includes(pathname);
	}, [hrefs, pathname]);

	return {
		isSelected,
	};
};
