<script lang="ts">
	import Header from '../components/Header.svelte';
	import '../styles/smui.css';
</script>

<div class="app">
	<Header />
	<main>
		<slot />
	</main>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 98%;
		margin: 0 auto;
		box-sizing: border-box;
	}

	@media (min-width: 1024px) {
		main {
			max-width: 64rem;
		}
	}
	@media (min-width: 800px) {
		main {
			width: 100%;
			max-width: 48rem;
		}
	}
</style>
