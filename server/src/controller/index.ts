import express, { Request, Response, NextFunction } from 'express'
import { inviteData } from '../infrastructure/schema'
import db from '../infrastructure'
import { eq } from 'drizzle-orm'

const router = express.Router()

// Get all invite data
router.get('/list', async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await db.select().from(inviteData)
    res.json(data)
  } catch (error) {
    next(error)
  }
})

router.get('/list/:id', async (req: Request<{ id: string }>, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params

    const data = await db.select().from(inviteData).where(eq(inviteData.id, id))

    if (!data || data.length === 0) {
      return res.status(404).json({ message: 'Invite not found' })
    }

    return res.status(200).json(data[0])
  } catch (error) {
    next(error)
  }
})

// Create invite data
router.post('/create', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, showName, type } = req.body

    if (!name || !showName) {
      return res.status(400).json({ message: 'Name and email are required' })
    }

    const newData = {
      id: crypto.randomUUID(),
      type: type,
      name,
      showName,
      createdAt: new Date(),
      updatedAt: new Date(),
      isSeen: 0
    }

    await db.insert(inviteData).values(newData)
    return res.status(200).json({ id: newData.id })
  } catch (error) {
    next(error)
  }
})

export default router
