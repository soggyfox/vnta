<script lang="ts">
	import { base } from '$app/paths';
</script>

<section class="partners content-width">
	<h3>Our Partners</h3>

	<div class="partners__grid">
		<div class="partner">MIKRON</div>
		<div class="partner">Pomegranate</div>
		<div class="partner">Garmoosh</div>
		<div class="partner">VELO CITY</div>
	</div>
</section>

<style>
	.partners {
		margin: 96px auto 72px;
	}

	h3 {
		margin-bottom: 32px;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: rgba(255, 255, 255, 0.7);
		font-size: 1.1rem;
	}

	.partners__grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 18px;
		overflow: hidden;
		background: rgba(255, 255, 255, 0.02);
	}

	.partner {
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 120px;
		color: rgba(255, 255, 255, 0.5);
		border-right: 1px solid rgba(255, 255, 255, 0.08);
		border-bottom: 1px solid rgba(255, 255, 255, 0.08);
	}
</style>
