import type { IBaseResponse } from './base.types';
import type { IMedia } from './media.types';

export interface IUserMediaHistory extends IBaseResponse {
	userId: IBaseResponse['id'];
	mediaId: IBaseResponse['id'];
	media: IMedia;
}

export type TAddUserMediaHistory = Omit<IUserMediaHistory, 'media'>;
