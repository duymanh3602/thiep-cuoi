import express, { Request, Response, NextFunction } from 'express'
import { inviteData } from '../infrastructure/schema'
import db from '../infrastructure'
import { eq } from 'drizzle-orm'

const router = express.Router()

// Get all invite data
router.get('/', async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await db.select().from(inviteData)
    res.json(data)
  } catch (error) {
    next(error)
  }
})

export default router
