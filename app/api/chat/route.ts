import Anthropic from '@anthropic-ai/sdk'
import { NextRequest, NextResponse } from 'next/server'

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

const SYSTEM_PROMPT = `You are the official Monitt.io assistant. Monitt.io is an industrial IoT monitoring platform for generators and heavy machinery, based in Santiago, Chile.

Key facts:
- Products: TRB256 IoT gateway that captures 40+ parameters from industrial generators
- Features: AI predictive diagnostics (LSTM + Isolation Forest models), remote start/test, one-touch dispatch, real-time GPS tracking
- Plans: Residential ($49/mo, up to 2 devices), Business ($199/mo, up to 20 devices), Industrial (custom pricing)
- Technology: 4G/LTE connectivity, MQTT over TLS, cloud AI processing
- Coverage: Chile and Latin America, 4 countries
- Demo: Available at monitt.io or via contact form

Always respond in the same language the user writes in (Spanish or English).
Be helpful, concise, and professional. If asked about pricing, features, or demo booking, provide accurate information.
For complex technical questions or specific quotes, recommend contacting the sales team at contacto@monitt.io.`

export async function POST(req: NextRequest) {
  try {
    const { messages, lang } = await req.json()

    const anthropicMessages = messages
      .filter((m: { role: string; content: string }) => m.role === 'user' || m.role === 'assistant')
      .map((m: { role: string; content: string }) => ({
        role: m.role as 'user' | 'assistant',
        content: m.content,
      }))

    const response = await client.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 512,
      system: SYSTEM_PROMPT,
      messages: anthropicMessages,
    })

    const text = response.content[0].type === 'text' ? response.content[0].text : ''

    return NextResponse.json({ content: text })
  } catch (err) {
    console.error('[chat]', err)
    return NextResponse.json({ content: 'Lo siento, ocurrió un error. Por favor intenta de nuevo.' }, { status: 500 })
  }
}
