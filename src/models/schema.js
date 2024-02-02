const { sql } = require("drizzle-orm");
const {
    mysqlTable,
    int,
    varchar,
    boolean,
    timestamp,
} = require("drizzle-orm/mysql-core");

const Todo = mysqlTable("todos", {
    id: int("id").primaryKey().autoincrement(),
    title: varchar("title", { length: 125 }).notNull(),
    completed: boolean("completed").notNull().default(false),
    createAt: timestamp("create_at")
        .notNull()
        .default(sql`CURRENT_TIMESTAMP`),
});

module.exports = { Todo };
