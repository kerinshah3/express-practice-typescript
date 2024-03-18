import mongoose from 'mongoose';
import { keys } from '../util/keys';

// MongoDB connection URI from environment variables
const mongoURI: string = keys.MONGODB_URL;



// Connect to MongoDB
export const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log('MongoDB connected');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};
