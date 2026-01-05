<script lang="ts">
	const pillars = [
		{
			title: 'Cadence',
			body: 'Weekly alignment, monthly deliverables, quarterly recalibration. A rhythm that makes progress predictable.'
		},
		{
			title: 'Leadership',
			body: 'Not advisory. We make decisions, set direction, and move work forward with your team (or ours).'
		},
		{
			title: 'Outcome',
			body: 'A brand operating system + a high-functioning team. By month 12, the work runs without VNTA.'
		}
	];

	const phases = [
		{
			title: 'Month 1–2',
			body: 'Diagnosis → positioning → narrative. We define what you are, who it’s for, and how it’s expressed.'
		},
		{
			title: 'Month 3–6',
			body: 'Execution system. We ship deliverables, coordinate specialists, and install a monthly momentum loop.'
		},
		{
			title: 'Month 7–9',
			body: 'Scale initiatives. Campaigns, distribution, partnerships, and flagship moves that widen the moat.'
		},
		{
			title: 'Month 10–12',
			body: 'Institutionalize. Documentation, team autonomy, handover, and a clear post-VNTA path.'
		}
	];

	const included = [
		'Brand strategy + positioning + narrative',
		'Creative direction + identity oversight',
		'Team coordination (internal + external specialists)',
		'Monthly deliverables with clear scope & ownership',
		'Decision-making support + priority problem-solving',
		'Documentation: systems, playbooks, and handover assets'
	];

	const notIncluded = [
		'Unlimited design requests / production studio work',
		'Paid media buying (we can guide strategy & coordination)',
		'Building complex dev products (we can lead brand direction)',
		'“Advice-only” arrangements without execution ownership'
	];

	const faqs = [
		{
			q: 'Who is this for?',
			a: 'Founders who have something real, but need structure, leadership, and consistent execution to grow it properly.'
		},
		{
			q: 'Do you replace an internal team?',
			a: 'No. We lead and coordinate the work, whether that means building a team or guiding the one you already have.'
		},
		{
			q: 'What do monthly deliverables look like?',
			a: 'Defined roadmap with owners and dates: brand assets, narrative systems, launch/campaign work, partnerships, or operational brand infrastructure — depending on phase.'
		},
		{
			q: 'What happens after 12 months?',
			a: 'You keep the system and the team. Optional retainers exist for continuity, oversight, or stewardship (invite-only for the highest tier).'
		}
	];
</script>

<svelte:head>
	<title>Engagement Model — VNTA</title>
	<meta
		name="description"
		content="A structured 12-month brand leadership framework: cadence, phases, deliverables, and outcomes."
	/>
	<meta property="og:title" content="Engagement Model — VNTA" />
	<meta
		property="og:description"
		content="A structured 12-month brand leadership framework: cadence, phases, deliverables, and outcomes."
	/>
	<meta property="og:type" content="website" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

<main class="page-container">
	<div class="content content-width">
		<section class="hero">
			<h1 class="title">Engagement Model</h1>
			<p class="subtitle">A–Z Brand Leadership in Residence</p>

			<p class="lede">
				A structured 12-month operating model designed to turn vision into a functioning brand system —
				with clear cadence, decision-making, and execution momentum.
			</p>
		</section>

		<section class="statement">
			<p>
				This is not advisory.
				<br />
				This is leadership.
			</p>
		</section>

		<section class="section">
			<div class="section-head">
				<h2>How we operate</h2>
				<p>Three pillars that define the engagement.</p>
			</div>

			<div class="grid">
				{#each pillars as item}
					<div class="card">
						<h3>{item.title}</h3>
						<p>{item.body}</p>
					</div>
				{/each}
			</div>
		</section>

		<section class="section">
			<div class="section-head">
				<h2>12-month structure</h2>
				<p>Phased work that compounds. Each phase has different priorities and outputs.</p>
			</div>

			<div class="timeline">
				{#each phases as phase}
					<div class="timeline-card">
						<div class="phase-top">
							<span class="phase-pill">{phase.title}</span>
						</div>
						<p>{phase.body}</p>
					</div>
				{/each}
			</div>
		</section>

		<section class="section">
			<div class="section-head">
				<h2>What’s included</h2>
				<p>What you’re actually getting — and what you’re not.</p>
			</div>

			<div class="split">
				<div class="panel">
					<h3>Included</h3>
					<ul class="list">
						{#each included as item}
							<li>{item}</li>
						{/each}
					</ul>
				</div>

				<div class="panel panel--muted">
					<h3>Not included</h3>
					<ul class="list">
						{#each notIncluded as item}
							<li>{item}</li>
						{/each}
					</ul>
				</div>
			</div>
		</section>

		<section class="section">
			<div class="section-head">
				<h2>FAQ</h2>
				<p>Common questions before starting.</p>
			</div>

			<div class="faq">
				{#each faqs as f}
					<details class="faq-item">
						<summary>
							<span class="faq-q">{f.q}</span>
							<span class="faq-plus" aria-hidden="true">+</span>
						</summary>
						<p>{f.a}</p>
					</details>
				{/each}
			</div>
		</section>

		<section class="cta">
			<div class="cta-inner">
				<div class="cta-text">
					<h2>Ready to see packages?</h2>
					<p>Choose the level of leadership you need for the next 12 months.</p>
				</div>
				<a href="/pricing" class="btn-primary">View Packages</a>
			</div>
		</section>
	</div>
</main>

<style>
	/* FAQ */
	.faq {
		display: flex;
		flex-direction: column;
		gap: 12px;
	}

	.faq-item {
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 14px;
		background: rgba(255, 255, 255, 0.02);
		overflow: hidden;
	}

	.faq-item summary {
		cursor: pointer;
		font-weight: 600;
		color: rgba(255, 255, 255, 0.9);
		list-style: none;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 18px;
		padding: 16px 18px;
	}

	.faq-item summary::-webkit-details-marker {
		display: none;
	}

	.faq-plus {
		font-size: 1.1rem;
		color: rgba(255, 255, 255, 0.6);
		transition: transform 0.18s ease, color 0.18s ease;
	}

	.faq-item[open] .faq-plus {
		transform: rotate(45deg);
		color: rgba(255, 255, 255, 0.9);
	}

	.faq-item p {
		margin: 0;
		padding: 12px 18px 16px;
		border-top: 1px solid rgba(255, 255, 255, 0.08);
		color: rgba(255, 255, 255, 0.75);
		line-height: 1.65;
		max-width: 900px;
	}
</style>
