
import EmailTemplate from '@/app/email-templates/EmailTemplate';
import { Resend } from 'resend';


const resend = new Resend(process.env.RESEND_API_KEY || 're_EAjeHbse_JMbQahHyPBNtiDthPMHu4tih');


export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, phone, service, message } = body;

  try {
    const { error } = await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: ['thiagofellipe151@gmail.com'],
    subject: `Novo contato de ${name}`,
    react: EmailTemplate({ 
      name,
      email,
      phone,
      service,
      message
    })
  });

    if (error) {
      console.error('Resend error:', error);
      return new Response(JSON.stringify({ error }), { status: 400 });
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error('Internal error:', err);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}
