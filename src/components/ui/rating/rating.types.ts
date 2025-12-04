export enum EnumRatingVariable {
	DEFAULT = 'default',
	MIN_SIZE = 'min-size'
}

export interface IRatingProps {
	rating: number;
	variable?: EnumRatingVariable;
}
