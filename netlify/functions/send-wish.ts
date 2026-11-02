/**
 * Netlify Serverless Function: send-wish
 * Handles dispatching guestbook wishes via Gmail SMTP
 *
 * Environment variables:
 * SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_TO, SMTP_FROM
 */

export const handler = async (event: { httpMethod: string; body: string | null }) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    }
  }

  try {
    const data = JSON.parse(event.body || '{}')
    const { name, message, date } = data

    if (!name || !message) {
      return {
        statusCode: 400,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({ error: 'Name and message are required' }),
      }
    }

    const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com'
    const smtpPort = Number(process.env.SMTP_PORT || 465)
    const smtpSecure = process.env.SMTP_SECURE !== 'false'
    const smtpUser = process.env.SMTP_USER || 'swethavenkatachalam37@gmail.com'
    const smtpPass = process.env.SMTP_PASS || 'sdevnwehwzoazpwd'
    const smtpTo = process.env.SMTP_TO || 'swethavenkatachalam37@gmail.com'
    const smtpFrom = process.env.SMTP_FROM || `"Swetha & Deepak Wedding Guestbook" <${smtpUser}>`

    try {
      const nodemailer = await import('nodemailer')
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpSecure,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      })

      const formattedDate = date ? new Date(date).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }) : new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })

      await transporter.sendMail({
        from: smtpFrom,
        to: smtpTo,
        subject: `💍 Wedding Wish from ${name}!`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 28px; border: 1px solid #d4af37; border-radius: 16px; background-color: #fffaf2; box-shadow: 0 4px 20px rgba(100, 14, 27, 0.08);">
            <div style="text-align: center; margin-bottom: 20px;">
              <span style="font-size: 28px;">💍</span>
              <h2 style="color: #640e1b; font-size: 22px; margin: 6px 0 2px 0; font-family: Georgia, serif;">Wedding Wishes for Swetha &amp; Deepak</h2>
              <p style="color: #ab7a45; font-size: 13px; text-transform: uppercase; letter-spacing: 2px; margin: 0;">19 &amp; 20 November 2026</p>
            </div>
            
            <div style="background-color: #ffffff; border: 1px solid #f0e0c0; border-radius: 12px; padding: 20px; margin: 18px 0; box-shadow: 0 2px 8px rgba(0,0,0,0.02);">
              <p style="font-size: 15px; color: #555; margin: 0 0 10px 0;">
                <strong style="color: #640e1b; font-size: 16px;">From:</strong> <span style="font-weight: 600; color: #111;">${name}</span>
              </p>
              <div style="background-color: #fff9f0; padding: 16px; border-left: 4px solid #640e1b; border-radius: 6px; font-style: italic; color: #333; font-size: 16px; line-height: 1.6;">
                "${message}"
              </div>
            </div>

            <div style="text-align: center; margin-top: 20px; padding-top: 15px; border-top: 1px dashed #e2cfb4;">
              <p style="font-size: 12px; color: #888; margin: 0;">Received via Wedding Guestbook on ${formattedDate} (IST)</p>
            </div>
          </div>
        `,
      })

      return {
        statusCode: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({ success: true, message: 'Wish sent successfully via SMTP!' }),
      }
    } catch (smtpErr: any) {
      console.error('SMTP Delivery error:', smtpErr)
      return {
        statusCode: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({ error: 'Failed to send email via SMTP', details: smtpErr?.message }),
      }
    }
  } catch (err: any) {
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ error: 'Internal server error processing wish' }),
    }
  }
}
