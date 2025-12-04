export const updateSearchParams = (search: string) => {
	const url = new URL(location.href);

	url.search = search;

	history.pushState({}, '', url);
};
