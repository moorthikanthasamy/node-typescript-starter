import useragent from "useragent";

export const isReqFromChrome = (req: any, res: any, next: any) => {
   useragent.is(req.headers['user-agent']).chrome ? next() : res.send("Try our app in Chrome browser to get this awesome feature")
}