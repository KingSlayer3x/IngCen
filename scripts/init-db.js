const { neon } = require('@neondatabase/serverless')
const fs = require('fs')
const path = require('path')

const envLocalPath = path.join(process.cwd(), '.env.local')

if (!process.env.DATABASE_URL && fs.existsSync(envLocalPath)) {
  const envFile = fs.readFileSync(envLocalPath, 'utf8')
  const match = envFile.match(/^DATABASE_URL=(.*)$/m)

  if (match) {
    process.env.DATABASE_URL = match[1].trim().replace(/^"(.*)"$/, '$1')
  }
}

const databaseUrl = process.env.DATABASE_URL

if (!databaseUrl) {
  throw new Error('DATABASE_URL is required to initialize the database')
}

const sql = neon(databaseUrl)

async function initializeDatabase() {
  try {
    console.log('Creating users table...')
    await sql`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        full_name VARCHAR(255) NOT NULL,
        phone VARCHAR(20),
        password_hash VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `

    console.log('Creating verification_codes table...')
    await sql`
      CREATE TABLE IF NOT EXISTS verification_codes (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        code VARCHAR(6) NOT NULL,
        expires_at TIMESTAMP NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `

    console.log('Creating enrolled_courses table...')
    await sql`
      CREATE TABLE IF NOT EXISTS enrolled_courses (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        course_id VARCHAR(255) NOT NULL,
        enrolled_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `

    console.log('Creating orders table...')
    await sql`
      CREATE TABLE IF NOT EXISTS orders (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        total_amount DECIMAL(10, 2) NOT NULL,
        status VARCHAR(50) DEFAULT 'completed',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `

    console.log('Creating order_items table...')
    await sql`
      CREATE TABLE IF NOT EXISTS order_items (
        id SERIAL PRIMARY KEY,
        order_id INTEGER NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
        course_id VARCHAR(255) NOT NULL,
        course_name VARCHAR(255) NOT NULL,
        price DECIMAL(10, 2) NOT NULL
      )
    `

    console.log('Database initialized successfully!')
  } catch (error) {
    console.error('Database initialization failed:', error)
    process.exit(1)
  }
}

initializeDatabase()
