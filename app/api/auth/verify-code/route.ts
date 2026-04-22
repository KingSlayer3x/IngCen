import { NextRequest, NextResponse } from 'next/server'
import { getSql } from '@/lib/auth-db'

export async function POST(request: NextRequest) {
  try {
    const { email, code } = await request.json()

    if (!email || !code) {
      return NextResponse.json(
        { error: 'Email and code are required' },
        { status: 400 }
      )
    }

    const sql = getSql()
    const result = await sql`
      SELECT id
      FROM verification_codes
      WHERE email = ${email}
        AND code = ${code}
        AND expires_at > NOW()
    `

    if (result.length === 0) {
      return NextResponse.json(
        { error: 'Invalid or expired code' },
        { status: 400 }
      )
    }

    await sql`DELETE FROM verification_codes WHERE email = ${email}`

    return NextResponse.json({
      success: true,
      message: 'Code verified successfully',
    })
  } catch (error) {
    console.error('Error verifying code:', error)

    return NextResponse.json(
      { error: 'Failed to verify code' },
      { status: 500 }
    )
  }
}
