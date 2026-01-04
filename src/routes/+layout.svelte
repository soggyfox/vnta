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

	const socials = [
		{ name: 'Instagram', href: 'https://www.instagram.com/vntaofficial/' },
		{ name: 'LinkedIn', href: 'https://www.linkedin.com/company/vnta' }
	];

	const ventures = [
		{ name: 'maisonseul.ie', href: 'https://maisonseul.ie' },
		{ name: 'eirvox.ie', href: 'https://eirvox.ie' },
		{ name: 'vendr.ie', href: 'https://vendr.ie' }
	];
</script>

<svelte:head>
	<link rel="icon" type="image/png" href="{base}/main-dark.png" media="(prefers-color-scheme: light)" />
	<link rel="icon" type="image/png" href="{base}/main-dark.png" media="(prefers-color-scheme: dark)" />
	<link rel="icon" type="image/png" href="{base}/main-dark.png" />
	<meta name="theme-color" content="#000000" />
</svelte:head>

<div class="app-shell" data-sveltekit-preload-data="hover">
	{#key $page.url.pathname}
		<div class="page" in:fade={{ duration: 180 }}>
			{@render children()}

			<footer class="site-footer" aria-label="VNTA footer">
				<div class="site-footer__inner">
					<div class="site-footer__left">
						<p class="site-footer__slogan">Áilleacht na Díomhaointe.</p>

						<p class="site-footer__legal">
							VNTA® is a registered trademark of Vantanéant International Ltd.
						</p>

						<p class="site-footer__structure">
							Vantanéant International Ltd is the holding company for Maison Seul, Eirvox, and Vendr.
						</p>

						<div class="site-footer__ventures" aria-label="Ventures">
							{#each ventures as v, i}
								<a class="venture-link" href={v.href} target="_blank" rel="noreferrer">
									{v.name}
								</a>
								{#if i < ventures.length - 1}
									<span class="sep">·</span>
								{/if}
							{/each}
						</div>

						<a class="email-link" href="mailto:studio@vnta.xyz">studio@vnta.xyz</a>
					</div>

					<div class="site-footer__right" aria-label="Social links">
						{#each socials as s}
							<a class="social" href={s.href} target="_blank" rel="noreferrer" aria-label={s.name}>
								{#if s.name === 'Instagram'}
									<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
										<path
											fill="currentColor"
											d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm9 2h-9A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4Zm-4.5 4a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM17.75 6.1a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"
										/>
									</svg>
								{:else}
									<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
										<path
											fill="currentColor"
											d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.66-1.85 3.42-1.85 3.65 0 4.32 2.4 4.32 5.52v6.22ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z"
										/>
									</svg>
								{/if}
							</a>
						{/each}
					</div>
				</div>
			</footer>
		</div>
	{/key}
</div>

<style>
	:global(body) {
		margin: 0;
		min-height: 100vh;
		background: #000000;
		color: #ffffff;
		font-family: 'Manrope', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
		text-rendering: optimizeLegibility;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	:global(a) {
		color: inherit;
		text-decoration: none;
	}

	:global(*:focus-visible) {
		outline: 2px solid rgba(255, 255, 255, 0.5);
		outline-offset: 3px;
		border-radius: 4px;
	}

	:global(.page-container) {
		max-width: 1120px;
		margin: 0 auto;
		padding: 64px 48px 96px;
		min-height: 100vh;
	}

	:global(.content-width) {
		max-width: 880px;
	}

	:global(.logo) {
		display: block;
		transition: transform 0.3s ease;
	}

	:global(.logo:hover) {
		transform: scale(1.02);
	}

	:global(.logo img) {
		display: block;
		width: 120px;
		height: 120px;
		object-fit: contain;
	}

	:global(.email-link) {
		color: rgba(255, 255, 255, 0.6);
		text-decoration: none;
		font-size: 0.95rem;
		transition: all 0.2s ease;
		display: inline-block;
		margin-top: 12px;
	}

	:global(.email-link:hover) {
		color: rgba(255, 255, 255, 1);
		letter-spacing: 0.01em;
	}

	:global(.btn-primary) {
		display: inline-block;
		padding: 16px 32px;
		border-radius: 16px;
		background: transparent;
		border: 1px solid rgba(255, 255, 255, 0.2);
		color: #ffffff;
		text-decoration: none;
		font-weight: 600;
		font-size: 1rem;
		letter-spacing: 0.01em;
		transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
		cursor: pointer;
	}

	:global(.btn-primary:hover) {
		border-color: rgba(255, 255, 255, 0.5);
		background: rgba(255, 255, 255, 0.08);
		transform: translateY(-1px);
		box-shadow: 0 4px 12px rgba(255, 255, 255, 0.1);
	}

	:global(.btn-primary:active) {
		transform: translateY(0);
		box-shadow: 0 2px 6px rgba(255, 255, 255, 0.08);
	}

	/* Footer */
	.site-footer {
		margin-top: 72px;
		padding-top: 32px;
		border-top: 1px solid rgba(255, 255, 255, 0.08);
	}

	.site-footer__inner {
		max-width: 1120px;
		margin: 0 auto;
		padding: 0 48px 56px;
		display: flex;
		justify-content: space-between;
		gap: 28px;
		align-items: flex-end;
	}

	.site-footer__slogan {
		margin: 0 0 10px;
		font-family: 'Playfair Display', serif;
		font-size: 1.1rem;
		letter-spacing: -0.01em;
		color: rgba(255, 255, 255, 0.92);
	}

	.site-footer__legal,
	.site-footer__structure {
		margin: 0 0 10px;
		color: rgba(255, 255, 255, 0.58);
		font-size: 0.92rem;
		line-height: 1.6;
		max-width: 720px;
	}

	.site-footer__ventures {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
		align-items: center;
		margin-top: 6px;
	}

	.venture-link {
		color: rgba(255, 255, 255, 0.72);
		font-size: 0.92rem;
		transition: color 0.2s ease;
	}

	.venture-link:hover {
		color: rgba(255, 255, 255, 0.95);
	}

	.sep {
		color: rgba(255, 255, 255, 0.28);
	}

	.site-footer__right {
		display: flex;
		gap: 14px;
	}

	.social {
		width: 40px;
		height: 40px;
		border-radius: 999px;
		border: 1px solid rgba(255, 255, 255, 0.14);
		background: rgba(255, 255, 255, 0.03);
		display: inline-flex;
		align-items: center;
		justify-content: center;
		color: rgba(255, 255, 255, 0.8);
		transition: all 0.2s ease;
	}

	.social:hover {
		transform: translateY(-1px);
		border-color: rgba(255, 255, 255, 0.28);
		background: rgba(255, 255, 255, 0.05);
		color: rgba(255, 255, 255, 0.95);
	}

	.app-shell {
		min-height: 100vh;
	}

	.page {
		min-height: 100vh;
	}

	@media (max-width: 768px) {
		:global(.page-container) {
			padding: 48px 24px 80px;
		}

		:global(.logo img) {
			width: 80px;
			height: 80px;
		}

		.site-footer__inner {
			padding: 0 24px 44px;
			flex-direction: column;
			align-items: flex-start;
		}
	}
</style>
