import http from 'http';
import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import middleware from './middleware';
import config from './config.json';
import api from './api';
import initDb from './db';

let app = express();
app.server = http.createServer(app);
app = middleware({app, config});
app.use('/api', api({config}));


initDb({...config.db}, () => {
  app.server.listen(process.env.port || config.server.default_port, (err) => {
    if (err)
      throw err;
    console.log(`Started on port ${app.server.address().port}`);
  });
});

export default app;
