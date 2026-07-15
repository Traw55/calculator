import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// adapter-static is used for static site hosting (like GitHub Pages)
		adapter: adapter(),
		paths: {
			// Ensure correct path resolution when deploying to GitHub Pages subpath
			base: process.env.NODE_ENV === "production" ? "/calculator" : "",
		},
	}
};

export default config;
