import mongoose from "mongoose";

export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://nethmaranidu:50zPY}$C[Hv;igz7GcA3c7y^)Z8;u!YfUDu9Q}0sg7Z5Qv6ekT@cluster0.w4iqbjb.mongodb.net/Zentask')
        .then (() => console.log('Database Connected'));
}
