import express from 'express';
import CONSTANTS from "./utils/constants";
import accountRouter from './routes/account';
import indexRouter from './routes/index';
import browserTargetedRouter from './routes/browserTarget';
const app: any = express();

app.use(indexRouter);
app.use(accountRouter);
app.use(browserTargetedRouter);

app.listen(CONSTANTS.SERVER_PORT, () => console.log(`Server is running at ${CONSTANTS.SERVER_PORT}`));

export default app;