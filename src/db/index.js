import mongoose from 'mongoose';
import q from 'q';
mongoose.Promise = q.Promise;

const default_config = {
  useMongoClient: true
};

function db({user, port, host, dbname, password, authSource}, callback){
  var connection = mongoose.connect(`mongodb://${user}:${password}@${host}:${port}/${dbname}?authSource=${authSource}`, default_config).then((result)=>{
    mongoose.set('debug', true);
    callback();
  },function (err) {
    callback();
    console.log(err);
  });
}

export default db;
