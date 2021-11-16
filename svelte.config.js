/** @type {import('@sveltejs/kit').Config} */
import sveltePreprocess from "svelte-preprocess";
import adapter from '@sveltejs/adapter-netlify'
const config = {
	preprocess: sveltePreprocess(),
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: adapter()
	}
};

export default config;
