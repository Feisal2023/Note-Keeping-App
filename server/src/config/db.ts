import mongoose, { connect } from 'mongoose';
import {  ATLAS_URI } from './config';


const connectDB = async () => {
    try {

        const conn = await mongoose.connect(ATLAS_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        }as any);

        console.log("mongoose connect successfully");


    } catch (err) {
        console.log("error connecting to database", err);
        process.exit(1);
    }
};


export default connectDB;