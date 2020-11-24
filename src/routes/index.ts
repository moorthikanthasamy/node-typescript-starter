import express from "express"
const indexRouter: any = express.Router()
indexRouter.get('/', (req: any, res: any) => res.send("Welcome to Node-Typescript Starter"))
export default indexRouter