import { UrlObject } from 'url';

const SEARCH_PAGE_PATH = '/search';

/**
 * Class representation of the search query.
 */
export class SearchQuery {
	constructor(
		/**
		 * The term searched for by the user.
		 */
		private searchTerm: string,
		/**
		 * The technology requested by the user.
		 */
		private technology: string,
	) {}

	/**
	 * Returns the Url for the next-router to use.
	 */
	getUrl(): UrlObject | string {
		return {
			pathname: SEARCH_PAGE_PATH,
			query: {
				q: this.searchTerm,
				t: this.technology,
			},
		};
	}
}
