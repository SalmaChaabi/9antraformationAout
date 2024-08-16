const mongose = require('mongoose');
module.exports.connectToMongoDB = async () => {
    mongose.set('strictQuery', false);
    mongose
    .connect(process.env.URL_mongo)
    .then(() => {
      console.log('connect to DB') 
    })

    .catch((err) => {
      console.log(err);
         });


};