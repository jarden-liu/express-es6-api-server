import corsMiddleware from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import fs from 'fs';

export default({app, config, db}) => {
  //logger 服务日志
  app.use(morgan('dev'));
  app.use(morgan('common', {
    stream: fs.createWriteStream('./log/main.log', {flags: 'w'})
  }));

  app.use(corsMiddleware());

  app.use(bodyParser.json());

  return app;
};
