import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';
import 'dotenv-safe/config';
export default defineConfig({
  // مخزنی که درنهایت فایل های دیتابیس ما در ان قرار میگیرد
  out: './drizzle/src/db/drizzle',
  schema: './drizzle/src/db/schema/index.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.POSTGRES_URL!,
  },
  // توسط این دوگزینه میتوانیم تغییرات را مانیتور و رصد کنیم
  verbose: true,
  strict: true,
});
