class LocalStoragesService {
	get(key: string): string | null {
		const value = localStorage.getItem(key);

		if (!value) return null;

		return JSON.parse(value);
	}

	set(key: string, value: string | boolean): void {
		localStorage.setItem(key, JSON.stringify(value));
	}

	delete(key: string): void {
		localStorage.removeItem(key);
	}
}

export const localStoragesService = new LocalStoragesService();
