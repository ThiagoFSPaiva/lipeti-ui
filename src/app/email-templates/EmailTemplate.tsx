import { Html } from '@react-email/html';
import { Tailwind } from '@react-email/tailwind';
import { Container } from '@react-email/container';
import { Heading } from '@react-email/heading';
import { Text } from '@react-email/text';
import { Section } from '@react-email/section';
import { Img } from '@react-email/img';
import { Head } from '@react-email/components';


interface Props {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export const EmailTemplate = ({
  name,
  email,
  phone,
  service,
  message,
}: Props) => {
  return (
    <div style={{
      background: '#f3f4f6',
      padding: '2rem',
      borderRadius: '1rem',
      maxWidth: '36rem',
      margin: '2rem auto',
      color: '#111827',
      fontFamily: 'sans-serif'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        <img src="https://i.imgur.com/pIzgKq2.png" alt="Logo" style={{ height: '3rem', margin: '0 auto' }} />
        <h2 style={{ fontSize: '1.25rem', color: '#4f46e5', fontWeight: 'bold', marginTop: '1rem' }}>
          📩 Novo contato recebido
        </h2>
        <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>
          Um novo cliente preencheu o formulário do seu site.
        </p>
      </div>

      <div style={{
        background: '#fff',
        padding: '1.5rem',
        borderRadius: '0.75rem',
        boxShadow: '0 1px 2px rgba(0,0,0,0.03)',
        marginBottom: '1rem'
      }}>
        <p><strong>👤 Nome:</strong> {name}</p>
        <p><strong>📧 Email:</strong> {email}</p>
        <p><strong>📱 Telefone:</strong> {phone}</p>
        <p><strong>🛠️ Serviço de Interesse:</strong> {service}</p>
        <div style={{ paddingTop: '1rem', borderTop: '1px solid #e5e7eb' }}>
          <p style={{ fontWeight: 600, marginBottom: '0.25rem' }}>💬 Mensagem:</p>
          <p style={{ fontStyle: 'italic', color: '#374151' }}>{message}</p>
        </div>
      </div>

      <p style={{
        textAlign: 'center',
        fontSize: '0.75rem',
        color: '#6b7280',
        marginTop: '1.5rem'
      }}>
        Este e-mail foi enviado automaticamente a partir do seu site.
      </p>
    </div>
  );
};

export default EmailTemplate;