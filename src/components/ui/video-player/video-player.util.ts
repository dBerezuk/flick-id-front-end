export const getTime = (time: number) => {
	const hours = ('0' + Math.floor(time / 60 / 60)).slice(-2);
	const minutes = ('0' + Math.floor(time / 60)).slice(-2);
	const seconds = ('0' + Math.floor(time % 60)).slice(-2);

	return hours + ':' + minutes + ':' + seconds;
};
