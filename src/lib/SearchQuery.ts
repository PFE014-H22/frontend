const SEARCH_PAGE_PATH = '/search';

export class SearchQuery {
	constructor(private searchTerm: string) {}

	getUrl() {
		return {
			pathname: SEARCH_PAGE_PATH,
			query: {
				q: this.searchTerm,
			},
		};
	}
}
