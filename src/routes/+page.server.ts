import { locate, loadCollection } from '@iconify/json';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const iconData = await loadCollection(locate('material-symbols'));
	return { iconData };
};
