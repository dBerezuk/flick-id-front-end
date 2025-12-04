import type { AxiosRequestConfig } from 'axios';

export type TAxiosOriginalRequest = AxiosRequestConfig & { _retry: boolean };
