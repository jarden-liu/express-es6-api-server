import corsMiddleware from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';

export default({app, config, db}) => {
  //logger 服务日志
  app.use(morgan('dev'));

  app.use(corsMiddleware());

  app.use(bodyParser.json());


  return app;
};
