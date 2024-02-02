"use server";
const { migrate } = require("drizzle-orm/mysql2/migrator");
const { db } = require("./database");

(async () => {
    await migrate(db, { migrationsFolder: "./migrations" });
    console.log("Migration complete");
})();
