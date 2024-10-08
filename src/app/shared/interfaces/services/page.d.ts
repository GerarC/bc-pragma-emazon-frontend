export interface Page<T>{
	page: number;
	pageSize: number;
	totalPages: number;
	count: number;
	totalCount: number;
	content: Array<T>
}