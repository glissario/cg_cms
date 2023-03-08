import { c as create_ssr_component, u as escape } from "../../chunks/index3.js";
import { c as contentfulFetch } from "../../chunks/styles.js";
import "@contentful/rich-text-html-renderer";
const introQuery = `{
  introduction(id: "6XZorGZokJMI5jd28b73v7") {
    sys {
      id
    }
   	headline
    textContent{json}
  }
}
`;
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "@import '../styles/layout.scss';h1.svelte-1mo4hhb{color:var(--color-theme-2)}",
  map: null
};
async function load() {
  const response = await contentfulFetch(introQuery);
  const data = await response.json();
  return data.data;
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let viewModel = { headline: "", textContent: "" };
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1wtk5c9_START -->${$$result.title = `<title>Willkommen</title>`, ""}<meta name="${"introduction"}" content="${"colored glasses concept page"}"><!-- HEAD_svelte-1wtk5c9_END -->`, ""}

<section><h1 class="${"svelte-1mo4hhb"}">${escape(viewModel.headline)}</h1>
	<div class="${"content"}"><!-- HTML_TAG_START -->${viewModel.textContent}<!-- HTML_TAG_END --></div>
</section>`;
});
export {
  Page as default,
  load
};
