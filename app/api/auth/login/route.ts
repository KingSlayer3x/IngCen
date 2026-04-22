import bcrypt from 'bcryptjs'
import { NextRequest, NextResponse } from 'next/server'
import { getSql } from '@/lib/auth-db'

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      )
    }

    const sql = getSql()
    const result = await sql`
      SELECT id, email, full_name, password_hash, phone, created_at
      FROM users
      WHERE email = ${email}
    `

    if (result.length === 0) {
      return NextResponse.json(
        { error: 'Invalid email or password' },
        { status: 401 }
      )
    }

    const user = result[0]
    const isPasswordValid = await bcrypt.compare(password, user.password_hash)

    if (!isPasswordValid) {
      return NextResponse.json(
        { error: 'Invalid email or password' },
        { status: 401 }
      )
    }

    return NextResponse.json({
      success: true,
      user: {
        id: String(user.id),
        email: user.email,
        fullName: user.full_name,
        phone: user.phone,
        createdAt: user.created_at,
      },
    })
  } catch (error) {
    console.error('Error logging in:', error)

    return NextResponse.json(
      { error: 'Failed to log in' },
      { status: 500 }
    )
  }
}
