import * as express from 'express';
import * as formidable from 'formidable';
import * as os from 'os';
import * as path from 'path';
import * as fs from 'fs';
import { Subject, Observable } from 'rxjs';

export const uploadRouter = express.Router();

uploadRouter.route('/').post((request, response) => {
  const form = new formidable.IncomingForm();
  form.multiples = true;
  form.uploadDir = path.join(os.tmpdir(), '/uploads');

  const subject = new Subject<string>();
  const observable = subject
    .asObservable()
    .map(fileName => Observable.of(fileName))
    .combineAll();

  observable.subscribe(
    files => response.status(201).json(files),
    error => response.status(500).json(error)
  );

  form.on('file', (field, file) => {
    const newPath = path.join(form.uploadDir, file.name);
    fs.renameSync(file.path, newPath);
    subject.next(file.name);
  });

  form.on('error', subject.catch);

  form.on('end', subject.complete);
});
