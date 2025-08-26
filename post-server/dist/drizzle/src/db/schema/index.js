"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.posts = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
// در این بخش میخواهیم جدول خود را ایجاد کنیم
exports.posts = (0, pg_core_1.pgTable)('Posts', {
    id: (0, pg_core_1.uuid)('id').defaultRandom().primaryKey(), //  خواهد بود IDENTITY  در اینجا مشخص مکنیم ایدی به صورت ,
    title: (0, pg_core_1.varchar)('title', { length: 256 }).notNull(),
    content: (0, pg_core_1.varchar)('content', { length: 256 }).notNull(),
    createdAt: (0, pg_core_1.timestamp)('createdAt').defaultNow().notNull(), //هر وقت که ایجاد شد مقدار را قرار یده
});
