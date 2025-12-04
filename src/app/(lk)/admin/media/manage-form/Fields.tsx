import Field from '@/ui/field/Field';

import type { IManageFormProps } from './manage-form.types';

export function Fields({
	form,
	initCatalogOptions,
	initGenreOptions,
	isDataLoading
}: Pick<IManageFormProps, 'form' | 'initCatalogOptions' | 'initGenreOptions' | 'isDataLoading'>) {
	return (
		<div>
			<Field
				label='Title'
				placeholder='Enter a title'
				isLoading={isDataLoading}
				error={form.formState.errors.title}
				{...form.register('title', { required: 'Title is a required field' })}
			/>
			<Field
				label='Slug'
				placeholder='Enter a slug'
				isLoading={isDataLoading}
				error={form.formState.errors.slug}
				{...form.register('slug', { required: 'Slug is a required field' })}
			/>
			<Field
				label='Country'
				placeholder='Enter a country'
				isLoading={isDataLoading}
				error={form.formState.errors.country}
				{...form.register('country', { required: 'Country is a required field' })}
			/>
			<Field
				type='textarea'
				label='Slogan'
				placeholder='Enter a slogan'
				isLoading={isDataLoading}
				error={form.formState.errors.slogan}
				{...form.register('slogan', { required: 'Slogan is a required field' })}
			/>
			<Field
				type='textarea'
				label='Description'
				placeholder='Enter a description'
				isLoading={isDataLoading}
				error={form.formState.errors.description}
				{...form.register('description', { required: 'Description is a required field' })}
			/>
			<Field
				type='date'
				label='Premiere'
				isLoading={isDataLoading}
				error={form.formState.errors.premiere}
				{...form.register('premiere', { required: 'Premiere is a required field' })}
			/>
			<Field
				type='select'
				label='Catalog'
				options={initCatalogOptions}
				isLoading={isDataLoading}
				error={form.formState.errors.catalogId}
				{...form.register('catalogId', { required: 'Catalog is a required field' })}
			/>
			<Field
				type='select'
				label='Genre'
				options={initGenreOptions}
				isLoading={isDataLoading}
				error={form.formState.errors.genreId}
				{...form.register('genreId', { required: 'Genre is a required field' })}
			/>
		</div>
	);
}
