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

	const contactEmail = 'studio@vnta.xyz';

	const socials = [
		{
			label: 'Instagram',
			href: 'https://www.instagram.com/vntaofficial/',
			icon: 'instagram'
		},
		{
			label: 'LinkedIn',
			href: 'https://www.linkedin.com/company/vnta',
			icon: 'linkedin'
		}
	];

	const subsidiaries = [
		{ label: 'maisonseul.ie', href: 'https://maisonseul.ie' },
		{ label: 'eirvox.ie', href: 'https://eirvox.ie' },
		{ label: 'vendr.ie', href: 'https://vendr.ie' }
	];
</script>

<svelte:head>
	<link rel="icon" type="image/png" href="{base}/main-dark.png" media="(prefers-color-scheme: light)" />
	<link rel="icon" type="image/png" href="{base}/main-dark.png" media="(prefers-color-scheme: dark)" />
	<link rel="icon" type="image/png" href="{base}/main-dark.png" />
	<meta name="theme-color" content="#000000" />
</svelte:head>

<div class="app-shell">
	{#key $page.url.pathname}
		<div class="page" in:fade={{ duration: 180 }}>
			{@render children()}
		</div>
	{/key}

	<footer class="site-footer" aria-label="Site footer">
		<div class="footer-inner">
			<div class="footer-left">
				<p class="footer-slogan">Áilleacht na Díomhaointe.</p>

				<p class="footer-legal">
					VNTA<sup class="reg">®</sup> is a registered trademark of Vantanéant International Ltd.
				</p>

				<p class="footer-holdco">
					Vantanéant International Ltd is the umbrella company for Maison Seul, Eirvox, and Vendr.
				</p>

				<p class="footer-links" aria-label="Subsidiary sites">
					{#each subsidiaries as s, i (s.href)}
						<a class="sub-link" href={s.href} target="_blank" rel="noreferrer noopener">{s.label}</a>
						{#if i < subsidiaries.length - 1}
							<span class="sep" aria-hidden="true">·</span>
						{/if}
					{/each}
				</p>

				<a class="footer-email" href="mailto:{contactEmail}">{contactEmail}</a>
			</div>

			<div class="footer-right" aria-label="Social links">
				{#each socials as s (s.href)}
					<a class="social" href={s.href} target="_blank" rel="noreferrer noopener" aria-label={s.label}>
						{#if s.icon === 'instagram'}
							<svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
								<path
									d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Z"
									stroke="currentColor"
									stroke-width="1.5"
								/>
								<path
									d="M12 16.2a4.2 4.2 0 1 0 0-8.4 4.2 4.2 0 0 0 0 8.4Z"
									stroke="currentColor"
									stroke-width="1.5"
								/>
								<path
									d="M17.2 6.8h.01"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
								/>
							</svg>
						{:else}
							<svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
								<path
									d="M6.5 9.5V18"
									stroke="currentColor"
									stroke-width="1.6"
									stroke-linecap="round"
								/>
								<path
									d="M6.5 6.6v-.1"
									stroke="currentColor"
									stroke-width="2.6"
									stroke-linecap="round"
								/>
								<path
									d="M10.2 18v-5.1c0-1.9 1-3.2 2.7-3.2 1.5 0 2.3 1 2.3 2.9V18"
									stroke="currentColor"
									stroke-width="1.6"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M2.5 12c0-4.7 0-7.1 1.5-8.5C5.4 2 7.8 2 12.5 2h-1C16.2 2 18.6 2 20 3.5c1.5 1.4 1.5 3.8 1.5 8.5s0 7.1-1.5 8.5C18.6 22 16.2 22 11.5 22h1c-4.7 0-7.1 0-8.5-1.5C2.5 19.1 2.5 16.7 2.5 12Z"
									stroke="currentColor"
									stroke-width="1.2"
									opacity="0.25"
								/>
							</svg>
						{/if}
					</a>
				{/each}
			</div>
		</div>
	</footer>
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
		padding: 64px 48px 64px; /* slightly reduced bottom padding; footer is global now */
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

	.app-shell {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}

	.page {
		min-height: 100vh;
	}

	/* ---------- Global Footer ---------- */
	.site-footer {
		max-width: 1120px;
		width: 100%;
		margin: 0 auto;
		padding: 40px 48px 56px;
		border-top: 1px solid rgba(255, 255, 255, 0.1);
	}

	.footer-inner {
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
		gap: 24px;
	}

	.footer-left {
		max-width: 760px;
	}

	.footer-slogan {
		margin: 0 0 10px;
		font-family: 'Playfair Display', serif;
		font-size: 1.25rem;
		letter-spacing: -0.01em;
		color: rgba(255, 255, 255, 0.92);
	}

	.footer-legal,
	.footer-holdco {
		margin: 0 0 8px;
		font-size: 0.95rem;
		line-height: 1.6;
		color: rgba(255, 255, 255, 0.62);
	}

	.reg {
		font-size: 0.7em;
		top: -0.35em;
	}

	.footer-links {
		margin: 12px 0 12px;
		font-size: 0.95rem;
		color: rgba(255, 255, 255, 0.58);
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
		align-items: center;
	}

	.sep {
		opacity: 0.35;
	}

	.sub-link {
		color: rgba(255, 255, 255, 0.62);
		transition: color 0.2s ease;
		position: relative;
	}

	.sub-link:hover {
		color: rgba(255, 255, 255, 0.9);
	}

	.sub-link::after {
		content: '';
		position: absolute;
		left: 0;
		bottom: -2px;
		width: 100%;
		height: 1px;
		background: rgba(255, 255, 255, 0.35);
		transform: scaleX(0);
		transform-origin: left;
		transition: transform 0.2s ease;
	}

	.sub-link:hover::after {
		transform: scaleX(1);
	}

	.footer-email {
		display: inline-block;
		color: rgba(255, 255, 255, 0.7);
		font-size: 0.95rem;
		transition: color 0.2s ease;
	}

	.footer-email:hover {
		color: rgba(255, 255, 255, 1);
	}

	.footer-right {
		display: flex;
		align-items: center;
		gap: 12px;
	}

	.social {
		width: 40px;
		height: 40px;
		border-radius: 999px;
		border: 1px solid rgba(255, 255, 255, 0.14);
		background: rgba(255, 255, 255, 0.02);
		display: inline-flex;
		align-items: center;
		justify-content: center;
		transition: all 0.2s ease;
	}

	.social:hover {
		border-color: rgba(255, 255, 255, 0.28);
		background: rgba(255, 255, 255, 0.04);
		transform: translateY(-1px);
	}

	.social svg {
		width: 18px;
		height: 18px;
		color: rgba(255, 255, 255, 0.75);
	}

	@media (max-width: 768px) {
		:global(.page-container) {
			padding: 48px 24px 56px;
		}

		:global(.logo img) {
			width: 80px;
			height: 80px;
		}

		.site-footer {
			padding: 34px 24px 44px;
		}

		.footer-inner {
			flex-direction: column;
			align-items: flex-start;
			gap: 18px;
		}
	}
</style>
