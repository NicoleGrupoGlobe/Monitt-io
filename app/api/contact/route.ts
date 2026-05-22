import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, company, email, phone, plan, message } = body

    console.log('[contact form]', {
      name,
      company,
      email,
      phone,
      plan,
      message,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[contact]', err)
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
