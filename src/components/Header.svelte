<script lang="ts">
	import { page } from '$app/stores';
	import logo from '$lib/images/CG_Logo.png';
	import Button, { Label } from '@smui/button';
	import MenuSurface from '@smui/menu-surface';
	let surface: MenuSurface;
</script>

<header>
	<nav>
		<img src={logo} alt="logo" />
		<ul class="tablet-desktop-navigation">
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<Button href="/" variant="outlined">
					<Label>Willkommen</Label>
				</Button>
			</li>
			<li aria-current={$page.url.pathname === '/concept' ? 'page' : undefined}>
				<Button href="/concept" variant="outlined">
					<Label>Unser Konzept</Label>
				</Button>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/sverdle') ? 'page' : undefined}>
				<Button href="https://coloredglasses.de/" target="blank" variant="outlined">
					<Label>Zur Homepage</Label>
				</Button>
			</li>
		</ul>
		<div class="mobile-nav">
			<Button on:click={() => surface.setOpen(true)}>Menü</Button>
			<MenuSurface bind:this={surface} anchorCorner="BOTTOM_START" class="surface">
				<Button
					on:click={() => surface.setOpen(false)}
					class="button"
					href="/"
					variant="outlined"
					width="100%"
				>
					<Label>Willkommen</Label>
				</Button>
				<Button
					on:click={() => surface.setOpen(false)}
					class="button"
					href="/concept"
					variant="outlined"
				>
					<Label>Unser Konzept</Label>
				</Button>
				<Button
					on:click={() => surface.setOpen(false)}
					class="button"
					href="https://coloredglasses.de/"
					target="blank"
					variant="outlined"
				>
					<Label>Zur Homepage</Label>
				</Button>
			</MenuSurface>
		</div>
	</nav>
</header>

<style lang="scss">
	header {
		display: flex;
		background-color: white;
	}
	img {
		position: absolute;
		left: 0.5rem;
		top: 0.5rem;
		height: 4rem;
	}
	.surface {
		width: 20rem;
	}

	* :global(.button) {
		width: 100%;
		display: flex;
		align-items: center;
	}

	nav {
		display: flex;
		width: 100%;
		justify-content: flex-end;
		margin-right: 1rem;
		--background: rgba(255, 255, 255, 0.7);
	}

	ul {
		position: flex;
		margin: 0;
		height: 4.5em;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	.mobile-nav {
		margin: auto 0;
		min-width: 200px;
		display: flex;
		justify-content: end;
	}

	li {
		display: none;
		position: relative;
	}

	li + li {
		margin-left: 1rem;
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}

	@media (min-width: 1024px) {
		.tablet-desktop-navigation {
			justify-content: center;
		}
		nav {
			justify-content: center;
		}
	}

	@media (min-width: 716px) {
		header {
			align-items: flex-end;
		}
		li {
			display: flex;
		}
		.tablet-desktop-navigation {
			display: flex;
		}
		.mobile-nav {
			display: none;
		}
	}
</style>
