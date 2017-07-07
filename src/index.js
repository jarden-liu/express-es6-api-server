import http from 'http';
import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import middleware from './middleware';
import config from './config.json';

let app  = express();
app.server = http.createServer(app);

app = middleware({app,config});

//cors

export default app;
