import db from '~/infrastructure'
import { inviteData } from '~/infrastructure/schema'
import { eq } from 'drizzle-orm'

export const getInviteById = async (id: string) => {
  const result = await db.select().from(inviteData).where(eq(inviteData.id, id))
  return result[0] ?? null
}

export const getInvites = () => db.select().from(inviteData)

export const createInvite = (data: typeof inviteData.$inferInsert) => db.insert(inviteData).values(data)

export const updateInviteById = (id: string, data: Partial<typeof inviteData.$inferInsert>) =>
  db.update(inviteData).set(data).where(eq(inviteData.id, id))

export const deleteInviteById = (id: string) => db.delete(inviteData).where(eq(inviteData.id, id))
