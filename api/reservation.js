import { Resend } from 'resend';

const genericError = 'We could not send your request. Please try again.';

function sanitizeDiagnostic(value, apiKey = '') {
  let message = String(value || 'Unknown Resend error');
  if (apiKey) message = message.replaceAll(apiKey, '[redacted]');
  return message
    .replace(/Bearer\s+\S+/gi, 'Bearer [redacted]')
    .replace(/\bre_[A-Za-z0-9_-]+\b/g, '[redacted]')
    .slice(0, 400);
}

export default async function handler(request, response) {
  const diagnosticMode = process.env.VERCEL_ENV !== 'production';
  const fail = (status, category, message) => {
    const payload = { error: genericError };
    if (diagnosticMode) payload.diagnostic = { category, message };
    return response.status(status).json(payload);
  };

  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    return response.status(405).json({ error: 'Method not allowed.' });
  }

  let body = request.body;
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch {
      return fail(400, 'InvalidJson', 'Request body is not valid JSON.');
    }
  }

  const { name, email, phone, address, district, timing } = body && typeof body === 'object' ? body : {};
  const fields = { name, email, phone, address, district, timing };
  if (Object.values(fields).some((value) => typeof value !== 'string' || !value.trim())) {
    return fail(400, 'Validation', 'One or more required fields are missing.');
  }
  if (Object.values(fields).some((value) => value.length > 1000)) {
    return fail(400, 'Validation', 'A submitted field exceeds the 1000 character limit.');
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return fail(400, 'Validation', 'The email address is invalid.');
  }
  if (!['04:45 PM \u2014 06:15 PM', '06:45 PM \u2014 08:15 PM'].includes(timing)) {
    return fail(400, 'Validation', 'The selected batch timing is invalid.');
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('Reservation configuration error: RESEND_API_KEY is not configured.');
    return fail(503, 'Configuration', 'RESEND_API_KEY is missing from the Vercel function environment.');
  }

  const from = process.env.RESEND_FROM_EMAIL;
  if (!from) {
    console.error('Reservation configuration error: RESEND_FROM_EMAIL is not configured.');
    return fail(503, 'Configuration', 'Set RESEND_FROM_EMAIL to a sender address verified in your Resend account.');
  }

  const text = [
    'A new UI/UX course reservation/contact request was submitted.',
    '',
    `Name: ${name.trim()}`,
    `Email: ${email.trim()}`,
    `Phone number: ${phone.trim()}`,
    `Address: ${address.trim()}`,
    `District: ${district.trim()}`,
    `Timing: ${timing.trim()}`,
  ].join('\n');

  try {
    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from,
      to: ['novalayersteam@gmail.com'],
      replyTo: email.trim(),
      subject: 'New UI/UX Course Reservation',
      text,
    });

    if (error) {
      const safeMessage = sanitizeDiagnostic(error.message, apiKey);
      const category = error.name || 'ResendError';
      console.error('Resend email request failed:', JSON.stringify({ ...error, message: safeMessage }));
      return fail(502, category, safeMessage);
    }

    return response.status(200).json({ success: true, id: data?.id });
  } catch (error) {
    const safeMessage = sanitizeDiagnostic(error?.message || error, apiKey);
    const category = error?.name || 'ResendInitializationError';
    console.error('Reservation email setup/request failed:', JSON.stringify({ name: category, message: safeMessage }));
    return fail(502, category, safeMessage);
  }
}
