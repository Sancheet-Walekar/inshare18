require('dotenv').config();
const mongoose = require('mongoose');
function connectDB() {
    // Database connection 🥳
    mongoose.connect(process.env.MONGO_CONNECTION_URL, { 
        useNewUrlParser: true, 
      //  useCreateIndex:true, 
        useUnifiedTopology: true, 
      //  useFindAndModify : true 
    })
    //const connection = mongoose.connection;
    //connection.once('open', () => {
        .then((con) => {
        console.log("Database connected 🥳🥳🥳🥳");
    })
    .catch((err) => {
        console.log("Connection failed ☹️☹️☹️☹️");
        console.log(err);
    });
}

// mIAY0a6u1ByJsWWZ

module.exports = connectDB;