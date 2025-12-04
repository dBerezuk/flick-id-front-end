import { useState } from 'react';

export function useEffects() {
	const [isProjector, setIsProjector] = useState(false);

	const onToggleProjector = () => setIsProjector(prev => !prev);

	return { isProjector, onToggleProjector };
}
