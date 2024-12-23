import pg from 'pg'
const { Pool } = pg

const pool = new Pool({
  password: process.env.POSTGRES_PASSWORD,
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
})

export const query = (text, params) => pool.query(text, params)