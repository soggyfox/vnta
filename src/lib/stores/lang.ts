import { writable } from 'svelte/store';

export type Lang = 'en' | 'ga';

function createLang() {
	const initial: Lang = 'en';
	const { subscribe, set, update } = writable<Lang>(initial);

	return {
		subscribe,
		set,
		toggle: () => update((l) => (l === 'en' ? 'ga' : 'en'))
	};
}

export const lang = createLang();
