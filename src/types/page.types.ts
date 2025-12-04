export interface IPage<T, K = {}> {
	params: Promise<T>;
	searchParams: Promise<K>;
}
