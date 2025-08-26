import { InferInsertModel, InferSelectModel } from 'drizzle-orm';
import { pgTable, timestamp, uuid, varchar } from 'drizzle-orm/pg-core';

// در این بخش میخواهیم جدول خود را ایجاد کنیم

export const posts = pgTable('Posts', {
  id: uuid('id').defaultRandom().primaryKey(), //  خواهد بود IDENTITY  در اینجا مشخص مکنیم ایدی به صورت ,
  title: varchar('title', { length: 256 }).notNull(),
  content: varchar('content', { length: 256 }).notNull(),
  createdAt: timestamp('createdAt').defaultNow().notNull(), //هر وقت که ایجاد شد مقدار را قرار یده
});

export type Posts = InferSelectModel<typeof posts>; // ساخت تایپ برای جدولی که ایجاد کردیم
export type NewPosts = InferInsertModel<typeof posts>; // ساخت تایپ برای جدولی که ایجاد کردیم
