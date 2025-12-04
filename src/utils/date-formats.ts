import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export const getDateYear = (date: string | Date): number => dayjs(date).year();

export const getDateFullCompact = (date: string | Date): string => dayjs(date).format('YYYY.MM.DD');

export const getDateFromNow = (date: string | Date) => dayjs(date).fromNow();
