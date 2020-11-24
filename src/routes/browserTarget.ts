import express from "express"
import { getChromeFeature } from "../controllers/onlyforchrome"
import { isReqFromChrome } from "../middlewares/checkBrowser";
const browserTargetedRouter: any = express.Router()

browserTargetedRouter.get('/onlyonchrome', isReqFromChrome, (req: any, res: any) => {
   const chromeFeature = getChromeFeature()
   res.send(chromeFeature)
})
export default browserTargetedRouter