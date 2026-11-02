/**
 * SMTP Configuration & Mapping
 *
 * When you are ready to connect your SMTP email provider,
 * you can provide your credentials in your environment variables (.env file)
 * prefixed with VITE_SMTP_* or update the default fallback values below.
 *
 * Supported Providers:
 * - Gmail SMTP (smtp.gmail.com, port 587 or 465 with App Password)
 * - Brevo / Sendinblue (smtp-relay.brevo.com, port 587)
 * - SendGrid (smtp.sendgrid.net, port 587)
 * - Mailgun / Amazon SES / Custom Webmail SMTP
 */

export interface SmtpConfig {
  host: string
  port: number
  secure: boolean
  user: string
  pass: string
  to: string
  from: string
}

export const defaultSmtpConfig: SmtpConfig = {
  // SMTP Server Host
  host: (import.meta.env.VITE_SMTP_HOST as string) || 'smtp.gmail.com',

  // SMTP Port (587 for TLS, 465 for SSL)
  port: Number(import.meta.env.VITE_SMTP_PORT) || 465,

  // Secure connection flag (true for 465, false for 587)
  secure: (import.meta.env.VITE_SMTP_SECURE as string) !== 'false',

  // SMTP Username / Authenticated Email
  user: (import.meta.env.VITE_SMTP_USER as string) || 'swethavenkatachalam37@gmail.com',

  // SMTP Password or Google App Password (16 characters)
  pass: (import.meta.env.VITE_SMTP_PASS as string) || 'sdevnwehwzoazpwd',

  // Recipient Email where wedding wishes will be delivered
  to: (import.meta.env.VITE_SMTP_TO as string) || 'swethavenkatachalam37@gmail.com',

  // Sender Display
  from: (import.meta.env.VITE_SMTP_FROM as string) || '"Swetha & Deepak Wedding Guestbook" <swethavenkatachalam37@gmail.com>',
}
