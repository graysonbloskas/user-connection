const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });

    console.log('MongoDB Connected');
  } catch (error) {
    console.log('******** This is where the error is coming from');
    //Exits the process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
