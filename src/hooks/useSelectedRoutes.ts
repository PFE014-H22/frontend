import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { UrlObject } from 'url';

export const useSelectedRoutes = (hrefs: (string | UrlObject)[]) => {
	const { pathname } = useRouter();

	const isSelected = useMemo(() => {
		return hrefs.includes(pathname);
	}, [hrefs, pathname]);

	return {
		isSelected,
	};
};
