import * as express from 'express';
import * as formidable from 'formidable';
import * as fs from 'fs';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';

import { authRouter } from './authentication.router';
import { uploadRouter } from './upload.router';

const app = express();
app.use(bodyParser.json());
app.use(
  cors({
    origin: 'http://localhost:4200'
  })
);
app.use('/api/authentication', authRouter);
app.use('/api/upload', uploadRouter);

app.listen(5000, () => console.log('localhost running on 5000'));
