/** @type {import('./$types').PageLoad} */

// TODO: FIX META 

export function load({ params }) {
	return {
		meta: {
            title: 'About me',
            description: 'A front-end developer living in Gävle, Sweden.'
        }
	};
}