"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const drizzle_kit_1 = require("drizzle-kit");
require("dotenv-safe/config");
exports.default = (0, drizzle_kit_1.defineConfig)({
    // مخزنی که درنهایت فایل های دیتابیس ما در ان قرار میگیرد
    out: './drizzle/src/db/drizzle',
    schema: './drizzle/src/db/schema/index.ts',
    dialect: 'postgresql',
    dbCredentials: {
        url: process.env.POSTGRES_URL,
    },
    // توسط این دوگزینه میتوانیم تغییرات را مانیتور و رصد کنیم
    verbose: true,
    strict: true,
});
