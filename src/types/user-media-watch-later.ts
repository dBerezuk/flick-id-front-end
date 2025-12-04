import type { IBaseResponse } from './base.types';
import type { IMedia } from './media.types';

export interface IUserMediaWatchLater extends IBaseResponse {
	userId: IBaseResponse['id'];
	mediaId: IBaseResponse['id'];
}

export interface IUserMediaWatchLaterWithMedia extends IUserMediaWatchLater {
	media: IMedia;
}

export type TToggleUserMediaWatchLater = IUserMediaWatchLaterWithMedia | null;
