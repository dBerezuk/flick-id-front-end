import {
	type HTMLInputTypeAttribute,
	type InputHTMLAttributes,
	type SelectHTMLAttributes,
	type TextareaHTMLAttributes
} from 'react';
import { type FieldError } from 'react-hook-form';

export interface IFieldSelectOption {
	value: string;
	label: string;
}

interface IFieldProps {
	label?: string;
	isLoading?: boolean;
	error?: FieldError;
	options?: IFieldSelectOption[];
}

export type TInputProps = InputHTMLAttributes<HTMLInputElement> & { type?: HTMLInputTypeAttribute };

export type TTextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & { type?: 'textarea' };

export type TSelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
	type?: 'select';
};

export type TFieldComponentProps = IFieldProps &
	(
		| (TInputProps & {
				type?: HTMLInputTypeAttribute;
		  })
		| (TTextareaProps & {
				type?: 'textarea';
		  })
		| (TSelectProps & {
				type?: 'select';
		  })
	);
