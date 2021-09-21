import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import { fileURLToPath, URL } from 'url';
import { v4 as uuidV4 } from 'uuid'

import { siteOrigin, outputPath } from "#env";
import indexRouter from '#routes/index';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicPath = path.join(outputPath, "public");
const viewsPath = path.join(outputPath, "views");
const app = express();

// global values
app.locals.siteOrigin = siteOrigin;
// pug `basedir` option for absolute includes/extends
app.locals.basedir = viewsPath;

// view engine setup
app.set('views', viewsPath);
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/public", express.static(publicPath));


app.use((req, res, next) => {
  // canonical url middleware
  res.locals.canonicalURL = new URL(req.path, req.app.locals.siteOrigin);
  // nonce for scripts and styles
  res.locals.cspNonce = uuidV4();
  next();
})

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' 
    ? err 
    : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error.pug');
});

export default app;
