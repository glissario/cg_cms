import { client } from '$lib/contentfulClient';

export async function get() {
	const blogs = await client.getEntries({
		content_type: 'article'
	});

	if (blogs) {
		return {
			status: 200,
			body: {
				blogs
			}
		};
	}

	return {
		status: 404
	};
}
