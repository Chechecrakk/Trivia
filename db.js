const mongoose = require('mongoose');
 
mongoose.set('useFindAndModify', false);
mongoose.connect('mongodb+srv://ezebarrague:QAZ11qaz@cluster0-eyqqu.mongodb.net/test?retryWrites=true&w=majority', {
    useCreateIndex: true,
    useNewUrlParser: true
})

   .then(db => console.log('Base de datos conectada'))
   .catch(err => console.error(err));