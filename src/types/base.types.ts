export interface IBaseResponse {
	id: string;
	createdAt: string;
	updatedAt: string;
}

export interface IBasePaginateResponse<T> {
	isHasMore: boolean;
	items: T[];
}

export interface IBaseSearchParams {
	take?: number;
	skip?: number;
}

interface IBaseErrorFieldsValidate {
	property: string;
	errors: string[];
}

export interface IBaseErrorResponse {
	message: string;
	error: string;
	statusCode: number;
	fields?: IBaseErrorFieldsValidate[];
}
