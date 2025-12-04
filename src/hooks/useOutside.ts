import {
	type Dispatch,
	type RefObject,
	type SetStateAction,
	useEffect,
	useRef,
	useState
} from 'react';

interface IOutside<T> {
	ref: RefObject<T | null>;
	isShow: boolean;
	setIsShow: Dispatch<SetStateAction<boolean>>;
}

export const useOutside = <T extends HTMLElement = HTMLElement>(
	initialIsVisible: boolean
): IOutside<T> => {
	const [isShow, setIsShow] = useState(initialIsVisible);
	const ref = useRef<T>(null);

	const handleClickOutside = (event: MouseEvent) => {
		if (ref.current && !ref.current.contains(event.target as Node)) {
			setIsShow(false);
		}
	};

	useEffect(() => {
		document.addEventListener('click', handleClickOutside);

		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	}, []);

	return { ref, isShow, setIsShow };
};
