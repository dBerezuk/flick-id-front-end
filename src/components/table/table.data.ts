import { EnumTableHead, type TTableHead } from './table.types';

export const TABLE_HEAD: TTableHead = {
	[EnumTableHead.USER]: ['Name', 'Email', 'Admin'],
	[EnumTableHead.CATALOG]: ['Title'],
	[EnumTableHead.GENRE]: ['Title'],
	[EnumTableHead.MEDIA]: ['Title']
};
