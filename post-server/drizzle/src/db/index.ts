// pg محل قرار گیری فایل های
import { Pool } from 'pg';
import 'dotenv-safe/config';
import { drizzle, NodePgDatabase } from 'drizzle-orm/node-postgres';
import * as schema from './schema';
const pool = new Pool({
  port: 5432,
  host: 'localhost',
  database: process.env.POSTGRES_DB,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
});

export const mySqlDataPool: NodePgDatabase<typeof schema> = drizzle(pool, { schema });
