export async function POST(request) {
  try {
    const data = await request.json();
    const { name, email, phone, business, message } = data;

    // Validate required fields
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } },
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({ error: 'Invalid email address' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Here you can:
    // 1. Send email using a service like SendGrid, Resend, or Nodemailer
    // 2. Save to a database
    // 3. Send to a webhook
    // 4. Log the message

    console.log('Contact form submission:', {
      name,
      email,
      phone,
      business,
      message,
      timestamp: new Date().toISOString(),
    });

    // TODO: Integrate with your email service
    // Example with environment variables:
    // const emailService = new EmailService(process.env.EMAIL_API_KEY);
    // await emailService.send({
    //   to: process.env.ADMIN_EMAIL,
    //   from: email,
    //   subject: `New Contact Form Submission from ${name}`,
    //   text: message,
    //   html: `<p>${message}</p>`,
    // });

    return new Response(
      JSON.stringify({
        success: true,
        message:
          'Your message has been received. We will get back to you soon!',
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } },
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
