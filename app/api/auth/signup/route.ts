import bcrypt from 'bcryptjs'
import { NextRequest, NextResponse } from 'next/server'
import { getSql } from '@/lib/auth-db'

export async function POST(request: NextRequest) {
  try {
    const { email, fullName, password, phone } = await request.json()

    if (!email || !fullName || !password) {
      return NextResponse.json(
        { error: 'Email, full name, and password are required' },
        { status: 400 }
      )
    }

    const sql = getSql()
    const existingUser = await sql`
      SELECT id FROM users WHERE email = ${email}
    `

    if (existingUser.length > 0) {
      return NextResponse.json(
        { error: 'Email already registered' },
        { status: 400 }
      )
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    const result = await sql`
      INSERT INTO users (email, full_name, password_hash, phone)
      VALUES (${email}, ${fullName}, ${hashedPassword}, ${phone || null})
      RETURNING id, email, full_name, phone, created_at
    `

    const user = result[0]

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
    console.error('Error creating user:', error)

    return NextResponse.json(
      { error: 'Failed to create account' },
      { status: 500 }
    )
  }
}
