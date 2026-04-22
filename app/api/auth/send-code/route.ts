import { NextRequest, NextResponse } from 'next/server'
import { getSql } from '@/lib/auth-db'

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    const sql = getSql()
    const code = Math.floor(100000 + Math.random() * 900000).toString()
    const codeExpiry = new Date(Date.now() + 10 * 60 * 1000)

    await sql`
      INSERT INTO verification_codes (email, code, expires_at)
      VALUES (${email}, ${code}, ${codeExpiry.toISOString()})
      ON CONFLICT (email) DO UPDATE
      SET code = EXCLUDED.code,
          expires_at = EXCLUDED.expires_at,
          created_at = CURRENT_TIMESTAMP
    `

    const response: { success: true; message: string; devCode?: string } = {
      success: true,
      message: 'Verification code sent to email',
    }

    if (process.env.NODE_ENV !== 'production') {
      response.devCode = code
    }

    return NextResponse.json(response)
  } catch (error) {
    console.error('Error sending code:', error)

    return NextResponse.json(
      { error: 'Failed to send verification code' },
      { status: 500 }
    )
  }
}
