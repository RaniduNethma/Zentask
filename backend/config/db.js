import mongoose from "mongoose";
import 'dotenv/config';

const DBConnctLink = process.env.DBLINK;

export const connectDB = async() => {
    await mongoose.connect(DBConnctLink)
        .then (() => console.log('Database Connected'));
}
