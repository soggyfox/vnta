<script lang="ts">
	import '@fontsource/manrope/400.css';
	import '@fontsource/manrope/500.css';
	import '@fontsource/manrope/600.css';
	import '@fontsource/manrope/700.css';
	import '@fontsource/playfair-display/600.css';
	import '@fontsource/playfair-display/700.css';

	const packages = [
		{
			name: 'FOUNDATION',
			price: '€667',
			period: '/month',
			oneTime: 'or €7,299 one-time',
			features: [
				'Brand strategy, positioning, identity',
				'Team coordination & creative direction',
				'Monthly deliverables & oversight',
				'Complimentary 3-month post-service for new clients'
			]
		},
		{
			name: 'GROWTH',
			price: '€1,083',
			period: '/month',
			oneTime: 'or €11,999 one-time',
			features: [
				'Everything in FOUNDATION + advanced positioning',
				'Narrative, campaigns, content & marketing alignment',
				'Team motivation & performance oversight',
				'Monthly rhythm & momentum building'
			],
			featured: true
		},
		{
			name: 'SIGNATURE',
			price: '€1,500',
			period: '/month',
			oneTime: 'or €15,999 one-time',
			features: [
				'Everything in GROWTH + long-term brand/business architecture',
				'Market expansion & flagship initiatives',
				'Full leadership advisory',
				'VNTA as external Brand Director / Vision Steward'
			]
		}
	];

	const retainers = [
		{
			name: 'Continuity',
			price: '€750/m',
			description: 'Monthly strategic call, oversight'
		},
		{
			name: 'Oversight',
			price: '€1,250/m',
			description: 'Bi-monthly calls, team guidance, priority access'
		},
		{
			name: 'Stewardship',
			price: '€1,750–€2,000/m',
			description: 'Full vision leadership & brand direction',
			inviteOnly: true
		}
	];

	let tailoredModalOpen = false;

	const tailored = {
		name: '',
		email: '',
		company: '',
		engagement: 'Audit & Diagnosis',
		timeline: '1–2 months',
		budget: 'Not sure',
		notes: ''
	};

	const engagementOptions = [
		'Audit & Diagnosis',
		'Repositioning / Refinement',
		'Go-to-market / Launch',
		'Brand Leadership Advisory',
		'Other'
	];

	const timelineOptions = ['ASAP', '1–2 months', '3–6 months', '6–12 months', 'Not sure'];
	const budgetOptions = ['< €5k', '€5k–€10k', '€10k–€20k', '€20k+', 'Not sure'];

	function openTailoredModal() {
		tailoredModalOpen = true;
	}

	function closeTailoredModal() {
		tailoredModalOpen = false;
	}

	function openTailoredEmail() {
		const to = 'studio@vnta.xyz';
		const subject = encodeURIComponent('Tailored engagement inquiry — VNTA');

		const bodyLines = [
			`Name: ${tailored.name || '-'}`,
			`Email: ${tailored.email || '-'}`,
			`Company: ${tailored.company || '-'}`,
			`Engagement type: ${tailored.engagement}`,
			`Timeline: ${tailored.timeline}`,
			`Budget range: ${tailored.budget}`,
			'',
			'Context:',
			tailored.notes || '-'
		];

		const body = encodeURIComponent(bodyLines.join('\n'));
		window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
	}

	function onKeydown(e: KeyboardEvent) {
		if (tailoredModalOpen && e.key === 'Escape') closeTailoredModal();
	}
</script>

<svelte:window on:keydown={onKeydown} />

<svelte:head>
	<title>Packages — VNTA</title>
	<meta
		name="description"
		content="Baseline engagement structures for brand leadership in residence. Most engagements are tailored."
	/>
</svelte:head>

<main class="page-container">
	<div class="content content-width">
		<h1 class="title">Packages</h1>

		<p class="subtitle">
			12 months of brand leadership in residence.
			<span class="subtitle-note">
				Most engagements are tailored. The packages below represent baseline structures used to anchor
				scope, cadence, and pricing.
			</span>
		</p>

		<!-- PACKAGES -->
		<div class="packages">
			{#each packages as pkg}
				<div class="package" class:featured={pkg.featured}>
					<div class="package-header">
						<h2>{pkg.name}</h2>
						<div class="pricing-options">
							<div class="price">
								{pkg.price}<span>{pkg.period}</span>
							</div>
							<div class="price-alt">{pkg.oneTime}</div>
						</div>
					</div>

					<ul class="features">
						{#each pkg.features as feature}
							<li>{feature}</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>

		<!-- RETAINERS -->
		<section class="retainers">
			<h2 class="section-title">Optional Post-Engagement Retainers</h2>
			<p class="section-note">After 12 months, new clients only</p>

			<div class="retainer-grid">
				{#each retainers as retainer}
					<div class="retainer">
						<h3>{retainer.name}</h3>
						<div class="retainer-price">{retainer.price}</div>
						{#if retainer.inviteOnly}
							<p class="invite">Invite-only</p>
						{/if}
						<p>{retainer.description}</p>
					</div>
				{/each}
			</div>
		</section>

		<!-- TAILORED -->
		<section class="tailored">
			<h2 class="section-title">Tailored Engagements</h2>

			<p class="tailored-lede">
				Not every business requires full brand leadership in residence. Some engagements focus on a
				specific phase — refinement, repositioning, or go-to-market execution.
			</p>

			<div class="tailored-steps">
				<div class="tailored-step">
					<h3>Audit & Diagnosis</h3>
					<p>Focused review of brand, narrative, market context, and operating realities.</p>
				</div>
				<div class="tailored-step">
					<h3>Scoped Plan</h3>
					<p>Clear deliverables, timeline, ownership, and specialist partners if required.</p>
				</div>
				<div class="tailored-step">
					<h3>Execution</h3>
					<p>Led by VNTA, often in collaboration with trusted execution partners.</p>
				</div>
			</div>

			<div class="tailored-cta">
				<p>To discuss a tailored engagement:</p>
				<button class="tailored-btn" on:click={openTailoredModal}>
					Request tailored scope
				</button>
			</div>
		</section>
	</div>

	{#if tailoredModalOpen}
		<div class="modal-backdrop" on:click={closeTailoredModal}>
			<div class="modal" on:click|stopPropagation>
				<div class="modal-header">
					<div>
						<h3 class="modal-title">Tailored Inquiry</h3>
						<p class="modal-subtitle">Short application. High-signal only.</p>
					</div>
					<button class="modal-close" on:click={closeTailoredModal}>×</button>
				</div>

				<div class="modal-body">
					<div class="form-grid">
						<label>
							<span>Name</span>
							<input bind:value={tailored.name} />
						</label>
						<label>
							<span>Email</span>
							<input bind:value={tailored.email} />
						</label>
						<label class="span-2">
							<span>Company / project</span>
							<input bind:value={tailored.company} />
						</label>
						<label>
							<span>Engagement</span>
							<select bind:value={tailored.engagement}>
								{#each engagementOptions as opt}
									<option>{opt}</option>
								{/each}
							</select>
						</label>
						<label>
							<span>Timeline</span>
							<select bind:value={tailored.timeline}>
								{#each timelineOptions as opt}
									<option>{opt}</option>
								{/each}
							</select>
						</label>
						<label class="span-2">
							<span>Budget range</span>
							<select bind:value={tailored.budget}>
								{#each budgetOptions as opt}
									<option>{opt}</option>
								{/each}
							</select>
						</label>
						<label class="span-2">
							<span>Context</span>
							<textarea rows="6" bind:value={tailored.notes}></textarea>
						</label>
					</div>

					<div class="modal-actions">
						<button class="modal-primary" on:click={openTailoredEmail}>
							Compose inquiry
						</button>
						<button class="modal-secondary" on:click={closeTailoredModal}>
							Not now
						</button>
					</div>
				</div>
			</div>
		</div>
	{/if}
</main>

<style>
	/* styles unchanged from previous message for brevity — paste modal + existing styles here */
</style>
