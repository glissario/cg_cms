import { sveltekit } from '@sveltejs/kit/vite';
import { viteCommonjs } from '@originjs/vite-plugin-commonjs';
import type { UserConfig } from 'vite';

const config: UserConfig = {
	plugins: [sveltekit(), viteCommonjs()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
};

export default config;
