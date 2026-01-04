<script lang="ts">
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Engagement Model — VNTA</title>
	<meta
		name="description"
		content="A–Z brand leadership in residence. VNTA leads strategy, teams, and execution for 12 months."
	/>
</svelte:head>

<div class="page-container">
	<header class="header">
		<a href="{base}/" class="logo-link">
			<picture class="logo">
				<source srcset="{base}/main-dark.png" media="(prefers-color-scheme: dark)" />
				<img src="{base}/main-dark.png" alt="VNTA" width="120" height="120" />
			</picture>
		</a>
	</header>

	<main class="content content-width">
		<h1 class="title">Engagement Model</h1>
		<p class="subtitle">A–Z Brand Leadership in Residence</p>

		<section class="lede-block">
			<p class="lede">
				VNTA operates as brand leadership in residence. We provide A–Z handling so founders can
				focus on their craft while we lead strategy, execution, and the people behind it.
			</p>
		</section>

		<section class="statement">
			<p>
				This is not advisory.
				<br />
				This is leadership.
			</p>
		</section>

		<section class="body">
			<p>
				Each engagement runs for 12 months. During this time, VNTA leads brand direction,
				coordinates specialist teams, and maintains clarity across every decision and deliverable.
			</p>

			<p>
				By the end, clients leave with a scaled business, clear monthly execution rhythms, and a
				team that continues to function without VNTA.
			</p>
		</section>

		<section class="cta">
			<a href="{base}/pricing" class="btn-primary">View Packages</a>
		</section>

		<div class="footer-section">
			<a href="{base}/" class="secondary-logo-link">
				<picture class="secondary-logo">
					<source srcset="{base}/secondary-dark.png" media="(prefers-color-scheme: dark)" />
					<img src="{base}/secondary-dark.png" alt="VNTA" width="200" height="60" />
				</picture>
			</a>
			<a href="mailto:studio@vnta.xyz" class="email-link">studio@vnta.xyz</a>
		</div>
	</main>
</div>

<style>
	/* Match the "good page" header rhythm */
	.header {
		padding: 0 0 40px;
	}

	.logo-link {
		display: inline-block;
		transition: opacity 0.2s ease;
	}

	.logo-link:hover {
		opacity: 0.8;
	}

	/* Match typography hierarchy from Packages page */
	.title {
		font-family: 'Playfair Display', serif;
		font-size: clamp(2.5rem, 5vw, 4rem);
		font-weight: 700;
		margin: 0 0 0.5rem;
		letter-spacing: -0.02em;
	}

	.subtitle {
		font-size: 1.125rem;
		line-height: 1.6;
		color: rgba(255, 255, 255, 0.65);
		margin: 0 0 3.5rem;
	}

	.lede-block {
		margin-bottom: 3.5rem;
	}

	.lede {
		margin: 0;
		font-size: 1.0625rem;
		line-height: 1.7;
		color: rgba(255, 255, 255, 0.8);
		max-width: 820px;
	}

	/* Give the statement the same “premium” weight but keep it controlled */
	.statement {
		margin: 0 0 3.5rem;
		padding: 28px 32px;
		border-radius: 18px;
		border: 1px solid rgba(255, 255, 255, 0.12);
		background: linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02));
		backdrop-filter: blur(10px);
		box-shadow: 0 4px 24px rgba(0, 0, 0, 0.2);
	}

	.statement p {
		margin: 0;
		font-family: 'Playfair Display', serif;
		font-size: 1.75rem;
		line-height: 1.35;
		color: rgba(255, 255, 255, 0.92);
		letter-spacing: -0.01em;
	}

	.body {
		max-width: 820px;
		margin-bottom: 4rem;
	}

	.body p {
		font-size: 1rem;
		line-height: 1.7;
		color: rgba(255, 255, 255, 0.8);
		margin: 0 0 24px;
	}

	.cta {
		margin-bottom: 4rem;
	}

	@media (max-width: 768px) {
		.statement {
			padding: 22px 20px;
		}

		.statement p {
			font-size: 1.5rem;
		}
	}
</style>
