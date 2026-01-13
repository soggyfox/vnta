import { json } from '@sveltejs/kit';

export const POST = async ({ request }) => {
	try {
		const formData = await request.formData();

		// Honeypot check (simple bot protection)
		if (formData.get('company_website')) {
			return json({ success: true });
		}

		// TODO:
		// - send email (Resend / Nodemailer / SES / etc.)
		// - store application if needed
		// - validate required fields if you want server-side enforcement

		return json({ success: true });
	} catch (err) {
		console.error('Careers apply error:', err);
		return json(
			{ success: false, error: 'Application failed' },
			{ status: 500 }
		);
	}
};

// Optional but useful: allows quick browser / health checks
export const GET = async () => {
	return json({ ok: true });
};
