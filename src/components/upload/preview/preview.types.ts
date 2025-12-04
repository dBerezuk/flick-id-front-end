export interface IPreviewProps {
	isLoading: boolean;
	value: string | undefined;
	folder: string;
	defaultValue: string;
	alt: string;
	onClear: () => void;
}
