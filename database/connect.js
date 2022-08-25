const mongoose = require('mongoose');

const connector = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/test', {
        keepAlive: true,
        connectTimeoutMS: 60000,
        socketTimeoutMS: 60000
    });
  } catch (error) {
    console.log("Failed to connect ", error);
  }
};

connector();
