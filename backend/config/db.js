import mongoose from "mongoose";

export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://nethmaranidu:50zPY%7D%24C%5BHv%3Bigz7GcA3c7y%5E%29Z8%3Bu%21YfUDu9Q%7D0sg7Z5Qv6ekT@cluster0.w4iqbjb.mongodb.net/Zentask')
        .then (() => console.log('Database Connected'));
}
