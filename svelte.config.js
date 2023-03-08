import adapter from '@sveltejs/adapter-netlify';
import { join } from 'path';
import { readFileSync } from 'fs';
import { cwd } from 'process';
import { vitePreprocess } from '@sveltejs/kit/vite';

const pkg = JSON.parse(readFileSync(join(cwd(), 'package.json')));

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			target: '#svelte',
			split: false
		})
	}
};

export default config;
