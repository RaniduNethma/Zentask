import mongoose from "mongoose";
import 'dotenv/config';

const DBConnction = process.env.DBLINK;

export const connectDB = async() => {
    await mongoose.connect(DBConnction)
        .then (() => console.log('Database Connected'));
}
