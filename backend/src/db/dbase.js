import mongoose from 'mongoose';

export default async function connectDB() {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.MONGODB_NAME}`);
        console.log("Connected to MONGODB");
    } catch (error) {
        console.error("Error connecting to MONGODB", error);
        process.exit(1);
    }
}