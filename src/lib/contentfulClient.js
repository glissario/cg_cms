import * as contentful from 'contentful';

const client = contentful.createClient({
	space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
	accessToken: import.meta.env.VITE_CONTENTFUL_DELIVERY_API_TOKEN
});

export { client };

const contentfulFetch = async (query = '') => {
	const url =
		'https://graphql.contentful.com/content/v1/spaces/' + import.meta.env.VITE_CONTENTFUL_SPACE_ID;

	const response = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + import.meta.env.VITE_CONTENTFUL_DELIVERY_API_TOKEN
		},
		body: JSON.stringify({ query })
	});

	return response;
};

export default contentfulFetch;
