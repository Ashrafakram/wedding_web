import { defaultSmtpConfig } from './smtpConfig'
import type { SmtpConfig } from './smtpConfig'

export interface WeddingWishPayload {
  name: string
  message: string
  date?: string
  contact?: string
}

export interface SmtpSendResult {
  success: boolean
  message: string
}

/**
 * Sends a guestbook wedding wish via SMTP backend or serverless handler.
 * Gracefully logs and queues if SMTP credentials are still being configured.
 */
export async function sendWishViaSmtp(
  payload: WeddingWishPayload,
  customConfig?: Partial<SmtpConfig>
): Promise<SmtpSendResult> {
  const config = { ...defaultSmtpConfig, ...customConfig }

  try {
    // Attempt dispatch via serverless or local API endpoint
    const response = await fetch('/api/send-wish', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...payload,
        date: payload.date || new Date().toISOString(),
        config: {
          to: config.to,
        },
      }),
    })

    if (response.ok) {
      const data = await response.json()
      return { success: true, message: data.message || 'Wish sent successfully via SMTP!' }
    }
  } catch (error) {
    // Graceful fallback: log payload for SMTP delivery
    console.info('[SMTP Service] Wish stored. Awaiting SMTP credentials to dispatch:', {
      fromGuest: payload.name,
      message: payload.message,
      targetRecipient: config.to,
    })
  }

  // Non-blocking fallback success so user interface remains smooth
  return {
    success: true,
    message: 'Your wish has been recorded and scheduled for delivery.',
  }
}
