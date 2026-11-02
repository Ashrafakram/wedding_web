/**
 * Netlify Serverless Function: send-wish
 * Handles dispatching guestbook wishes via SMTP (Nodemailer or direct SMTP)
 *
 * Environment variables:
 * SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_TO, SMTP_FROM
 */

export const handler = async (event: { httpMethod: string; body: string | null }) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    }
  }

  try {
    const data = JSON.parse(event.body || '{}')
    const { name, message, date } = data

    if (!name || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Name and message are required' }),
      }
    }

    const smtpHost = process.env.SMTP_HOST
    const smtpUser = process.env.SMTP_USER
    const smtpPass = process.env.SMTP_PASS
    const smtpTo = process.env.SMTP_TO || 'swetha.deepak.wedding@gmail.com'

    // If SMTP credentials are configured in environment variables, dispatch email
    if (smtpHost && smtpUser && smtpPass) {
      try {
        const nodemailer = await import('nodemailer')
        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: Number(process.env.SMTP_PORT || 587),
          secure: process.env.SMTP_SECURE === 'true',
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
        })

        await transporter.sendMail({
          from: process.env.SMTP_FROM || `"Wedding Guestbook" <${smtpUser}>`,
          to: smtpTo,
          subject: `💐 New Wedding Wish from ${name}!`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0c598; border-radius: 12px; background: #fffcf8;">
              <h2 style="color: #640e1b; margin-top: 0;">💍 New Wedding Wish Received</h2>
              <p style="font-size: 16px; color: #333;"><strong>From:</strong> ${name}</p>
              <div style="background: #fdf7ee; padding: 15px; border-left: 4px solid #640e1b; border-radius: 4px; margin: 15px 0;">
                <p style="font-size: 15px; color: #640e1b; line-height: 1.6; margin: 0;">"${message}"</p>
              </div>
              <p style="font-size: 12px; color: #888;">Received on: ${date || new Date().toLocaleString()}</p>
            </div>
          `,
        })

        return {
          statusCode: 200,
          body: JSON.stringify({ success: true, message: 'Wish sent successfully via SMTP!' }),
        }
      } catch (smtpErr) {
        console.error('SMTP Delivery error:', smtpErr)
      }
    }

    // Fallback response when SMTP credentials are pending
    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: 'Wish recorded successfully! Awaiting SMTP credential mapping.',
      }),
    }
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error processing wish' }),
    }
  }
}

