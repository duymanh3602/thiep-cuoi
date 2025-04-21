import { int, mysqlTable, timestamp, varchar, longtext, tinyint } from 'drizzle-orm/mysql-core'
export const inviteData = mysqlTable('invite_data', {
  id: varchar({ length: 36 }).primaryKey(),
  type: int().notNull(),
  name: varchar({ length: 255 }),
  showName: varchar({ length: 255 }),
  guestBook: longtext(),
  createdAt: timestamp().notNull().defaultNow(),
  updatedAt: timestamp().notNull().defaultNow().onUpdateNow(),
  isSeen: tinyint().notNull().default(0)
})
