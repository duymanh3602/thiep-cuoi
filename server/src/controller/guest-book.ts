import express, { Request, Response, NextFunction } from 'express'
import { guestBook } from '../infrastructure/schema'
import db from '../infrastructure'

const router = express.Router()

// Get all invite data
router.get('/list', async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await db.select().from(guestBook)
    res.json(data)
  } catch (error) {
    next(error)
  }
})

router.post('/create', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, message: content } = req.body

    if (!name || !content) {
      res.status(400).json({ message: 'Name and email are required' })
    }

    const newData = {
      id: crypto.randomUUID(),
      name,
      content,
      createdAt: new Date()
    }

    await db.insert(guestBook).values(newData)
    res.status(200).json({ id: newData.id })
  } catch (error) {
    next(error)
  }
})

export default router
