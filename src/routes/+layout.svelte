<script lang="ts">
	import '@fontsource/manrope/400.css';
	import '@fontsource/manrope/500.css';
	import '@fontsource/manrope/600.css';
	import '@fontsource/manrope/700.css';
	import '@fontsource/playfair-display/600.css';
	import '@fontsource/playfair-display/700.css';

	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import { fade } from 'svelte/transition';

	let { children } = $props();
	let mobileOpen = $state(false);

	const nav = [
		{ label: 'The Studio', href: `${base}/about` },
		{ label: 'Explore', href: `${base}/explore` },
		{ label: 'Packages', href: `${base}/pricing` }
	];

	const socials = [
		{ name: 'Instagram', href: 'https://www.instagram.com/vntaofficial/' },
		{ name: 'LinkedIn', href: 'https://www.linkedin.com/company/vnta' }
	];

	const year = new Date().getFullYear();

	function isActive(href: string) {
		const path = $page.url.pathname.replace(/\/$/, '');
		const target = href.replace(base, '').replace(/\/$/, '') || '/';
		const current = path || '/';
		return current === target;
	}

	function closeMobile() {
		mobileOpen = false;
	}
</script>

<svelte:head>
	<link rel="icon" type="image/png" href="{base}/main-dark.png" />
	<meta name="theme-color" content="#000000" />
</svelte:head>

<div class="app-shell" data-sveltekit-preload-data="hover">
	{#key $page.url.pathname}
		<div class="page" in:fade={{ duration: 180 }}>
			<header class="site-header">
				<div class="site-header__inner">
					<a href="{base}/" class="brand" on:click={closeMobile}>
						<img src="{base}/main-dark.png" alt="VNTA" width="104" height="104" />
					</a>

					<nav class="nav">
						{#each nav as item}
							<a
								class="nav-link"
								class:is-active={isActive(item.href)}
								href={item.href}
							>
								{item.label}
							</a>
						{/each}
						<span class="status">Coming Soon</span>
					</nav>

					<div class="mobile-controls">
						<span class="status status--mobile">Coming Soon</span>
						<button class="menu-btn" on:click={() => (mobileOpen = !mobileOpen)}>
							{mobileOpen ? '×' : '≡'}
						</button>
					</div>
				</div>

				{#if mobileOpen}
					<div class="mobile">
						<div class="mobile__panel">
							{#each nav as item}
								<a
									class="mobile__link"
									class:is-active={isActive(item.href)}
									href={item.href}
									on:click={closeMobile}
								>
									{item.label}
								</a>
							{/each}
						</div>
						<button class="mobile__backdrop" on:click={closeMobile} />
					</div>
				{/if}
			</header>

			<main class="site-main">
				{@render children()}
			</main>

			<footer class="site-footer">
				<div class="site-footer__inner">
					<div class="footer-block">
						<p class="footer-legal">
							VNTA® is a registered trademark of Vantanéant International Ltd.
						</p>
						<p class="footer-legal">
							Vantanéant International Ltd is the holding company for Maison Seul®, Eirvox™,
							and Vendr™.
						</p>
					</div>

					<div class="footer-block footer-contact">
						<a href="mailto:studio@vnta.xyz">studio@vnta.xyz</a>
					</div>

					<p class="footer-copy">
						© {year} Vantanèant International Ltd.
					</p>

					<div class="footer-socials">
						{#each socials as s}
							<a href={s.href} target="_blank" rel="noreferrer">{s.name}</a>
						{/each}
					</div>
				</div>
			</footer>
		</div>
	{/key}
</div>

<style>
	/* GLOBAL TYPE */
	:global(body) {
		margin: 0;
		min-height: 100vh;
		background: #000;
		color: #fff;

		/* SAFE OPTIMA STACK */
		font-family: Optima, "Optima Nova", "URW Classico",
			"Palatino Linotype", Palatino,
			system-ui, -apple-system, "Segoe UI", sans-serif;

		-webkit-font-smoothing: antialiased;
		text-rendering: optimizeLegibility;
	}

	/* layout + header/footer styles unchanged */
</style>
