import {connect } from "mongoose";

const connectDB = async() => {
    try {
        console.log("Connecting to MongoDb...\n---");
        await connect(process.env.MONGO_DB_URL!, {
          keepAlive: true,
          connectTimeoutMS: 60000,
          socketTimeoutMS: 60000,
        });
        console.log("Connected to MongoDb :)");
        
        
    } catch (error) {
        console.log("Error", error)
    }
}

connectDB()