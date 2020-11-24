import express from "express"
import { getRandomUser } from "../controllers/account"
const accountRouter: any = express.Router()

accountRouter.get('/randomuser', (req: any, res: any) => res.send(getRandomUser()))
export default accountRouter