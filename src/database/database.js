const mongoose = require('mongoose');

function connectToDatabase() {
 
   // se não estiver usando senha no mongo, usar:

   mongoose.connect('mongodb://localhost:27017/elgeladon'
  
   .then(() => {
    console.log('MongoDB conectado ');
  })
  .catch((err) => {
    return console.log(`Erro na conexão com o banco : ${err}`);
  }));




 //-------- se estiver com senha ---------
 
 
  // mongoose
  //   .connect(
  //     'mongodb://isabella:batatinha123@localhost:27017/elgeladon?authMechanism=DEFAULT',
  //     {
  //       useNewUrlParser: true,
  //       useUnifiedTopology: true,
  //     },
  //   )
  //   .then(() => {
  //     console.log('MongoDB conectado ');
  //   })
  //   .catch((err) => {
  //     return console.log(`Erro na conexão com o banco : ${err}`);
  //   });
}

module.exports = connectToDatabase;
