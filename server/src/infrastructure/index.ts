import 'dotenv/config'
import { drizzle } from 'drizzle-orm/mysql2'

const dbConfig = process.env.DATABASE_URL || ''

const db = drizzle(dbConfig)

export default db
